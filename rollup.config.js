import typescript from '@rollup/plugin-typescript';

import pkg from './package.json';

const external = Object.keys(pkg.peerDependencies).concat(['path', 'fs', 'typescript']);

console.log("external packages:", external);

export default {
  input: 'src/lib/index.ts',
  plugins: [typescript({ tsconfig: './src/lib/tsconfig.json', sourceMap: true })],
  external,
  output: [
    {
      format: 'cjs',
      dir: './build',
      sourcemap: true,
      name: 'smartepi-ui',
      exports: 'named',
      esModule: false,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'styled-components': 'styled',
      }
    }
  ]
};