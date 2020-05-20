

import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';
import jsx from 'acorn-jsx';

export default {
    input: 'src/lib/index.tsx',
    external: Object.keys(pkg.dependencies || {}),
    acornInjectPlugins: [jsx()],
    plugins: [typescript({jsx: 'preserve'})],
    output: [
        { file: pkg.main, format: "cjs" },
        { file: pkg.module, format: "esm" },
    ]
};