module.exports = {
	extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
	rules: {
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: [
					'at-root',
					'content',
					'else',
					'extend',
					'function',
					'if',
					'include',
					'mixin',
					'return',
					'warn',
					'error',
					'each',
					'for'
				]
			}
		]
	}
};
