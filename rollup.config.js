import image from "@rollup/plugin-image";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";

import pkg from "./package.json" with { type: "json" };

const external = Object.keys(pkg.peerDependencies).concat([
	"path",
	"fs",
	"typescript",
	"react/jsx-runtime",
	"react/jsx-dev-runtime",
	"react-dom/client",
]);

console.log("external packages:", external);

export default {
	input: "src/lib/index.ts",
	plugins: [
		typescript({ tsconfig: "./src/lib/tsconfig.json", sourceMap: true }),
		postcss({ plugins: [] }),
		image(),
	],
	external,
	output: [
		{
			format: "cjs",
			dir: "./build",
			sourcemap: true,
			name: "smartepi-ui",
			exports: "named",
			esModule: false,
			globals: {
				react: "React",
				"react-dom": "ReactDOM",
				"styled-components": "styled",
			},
			assetFileNames: "src/lib/assets/export-files/**/*",
		},
	],
};
