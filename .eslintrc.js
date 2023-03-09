module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"plugin:vue/essential",
		"plugin:vue/recommended",
		"plugin:import/errors",
		"plugin:import/warnings",
		"prettier",
	],
	parserOptions: {
		parser: ["@babel/eslint-parser"],
	},
	plugins: ["vue"],
	rules: {
		"no-unused-vars": 1,
		"import/no-unresolved": "off",

		/**********************/
		/*     Vue Rules      */
		/**********************/
		"vue/no-unused-components": "error",
		"vue/multi-word-component-names": 0,
		"vue/require-default-prop": 0,

		// Disable template errors regarding invalid end tags
		"vue/no-parsing-error": [
			"error",
			{
				"x-invalid-end-tag": false,
			},
		],

		/***************************/
		/* ESLint Vue Plugin Rules */
		/***************************/
		"vue/html-indent": [
			"error",
			"tab",
			{
				attribute: 1,
				baseIndent: 1,
				closeBracket: 0,
				alignAttributesVertically: false,
				ignores: [],
			},
		],
	},
};
