module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
	},
	extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
	parserOptions: {
		parser: ["@babel/eslint-parser"]
	},
	plugins: ['vue'],
	rules: {
		'vue/multi-word-component-names': 0,
		'no-unused-vars': 1,
	},
}
