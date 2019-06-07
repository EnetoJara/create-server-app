module.exports = function(api) {
	api.cache(() => false);

	const isLocal = process.env.REACT_APP_ENV;

	const presets = [
		[
			'@babel/env',
			{
				targets: {
					node: 'current'
				},
				useBuiltIns: 'entry',
				corejs: 3
			}
		],
		['@babel/react']
	];
	const plugins = [
		'@babel/syntax-dynamic-import',
		'@babel/proposal-class-properties',
		'@babel/plugin-transform-classes',
		'@babel/plugin-transform-object-super',
		'@babel/plugin-transform-runtime',
		'@babel/plugin-proposal-export-namespace-from',
		'@babel/plugin-proposal-export-default-from',
		'@babel/plugin-transform-function-name',
		'@babel/plugin-transform-arrow-functions',
		'@babel/plugin-transform-async-to-generator',
		'transform-member-expression-literals',
		'transform-property-literals',
		'@babel/plugin-transform-block-scoped-functions',
		'@babel/plugin-transform-block-scoping',
		'@babel/plugin-transform-destructuring',
		'@babel/plugin-transform-instanceof',
		'@babel/plugin-transform-parameters',
		'@babel/plugin-transform-shorthand-properties',
		'@babel/plugin-transform-spread',
		'@babel/plugin-transform-template-literals',
		'@babel/plugin-transform-exponentiation-operator',
		'@babel/plugin-proposal-object-rest-spread',
		'@babel/plugin-proposal-throw-expressions',
		'transform-minify-booleans'
	];

	if (isLocal === 'local') {
		plugins.push('react-hot-loader/babel');
	} else {
		plugins.push('transform-inline-environment-variables');
		plugins.push('transform-react-remove-prop-types');
		plugins.push('@babel/plugin-transform-react-constant-elements');
	}

	return {
		presets,
		plugins
	};
};
