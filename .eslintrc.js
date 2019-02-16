module.exports = {
	extends: ["eslint:recommended"],
	env: {
		node: true,
		commonjs: true,
		es6: true,
	},
	parser: "babel-eslint",
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: "module",
		ecmaFeatures: {
			impliedStrict: true,
			jsx: true,
		},
	},
	settings: {
		polyfills: ["promises"],
		"import/resolver": {
			node: {
				moduleDirectory: "node_modules",
			},
		},
	},
	plugins: ["import", "babel"],
	rules: {
		indent: ["error", "tab"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"space-before-function-paren": ["error", "always"],
		"keyword-spacing": [
			"error",
			{
				before: true,
				after: true,
			},
		],
		"arrow-body-style": ["error", "as-needed"],
		"arrow-parens": ["error", "always"],
		"comma-spacing": [
			"error",
			{
				before: false,
				after: true,
			},
		],
		"object-curly-spacing": [
			"error",
			"always",
			{
				arraysInObjects: false,
			},
		],
		"template-curly-spacing": ["error", "always"],
		"comma-dangle": [
			"error",
			{
				arrays: "never",
				objects: "always",
				imports: "never",
				exports: "never",
				functions: "ignore",
			},
		],
		"block-spacing": ["error", "always"],
		"no-else-return": "error",
		"no-nested-ternary": "error",
		"require-await": "error",
		"arrow-spacing": [
			"error",
			{
				before: true,
				after: true,
			},
		],
		"prefer-const": "error",
		"no-var": "error",
		"no-use-before-define": "error",
		"linebreak-style": ["error", "unix"],
	},
};
