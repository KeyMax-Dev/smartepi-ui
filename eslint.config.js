import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";

export default [
	{
		files: ["**/*.ts", "**/*.tsx"],
		ignores: [
			"node_modules/**",
			"build/**",
			"dist/**",
			"public/**",
			"**/*.config.js",
		],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		plugins: {
			"@typescript-eslint": typescriptEslint,
			react: react,
		},
		settings: {
			react: {
				version: "detect",
			},
		},
		rules: {
			semi: "warn",
			"@typescript-eslint/explicit-function-return-type": [
				"error",
				{ allowExpressions: true },
			],
			"react/react-in-jsx-scope": "off", // Not needed with React 19 new JSX transform
			"@typescript-eslint/no-explicit-any": "warn",
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{ argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
			],
		},
	},
	{
		files: ["**/*.js", "**/*.jsx"],
		ignores: ["node_modules/**", "build/**", "dist/**"],
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
		},
	},
];
