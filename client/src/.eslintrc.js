module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended'
	],
	parserOptions: {
		ecmaFeatures: { jsx: true },
		ecmaVersion: 12,
		sourceType: 'module'
	},
	plugins: [
		'react'
	],
	rules: {
		'accessor-pairs': 'error',
		'array-bracket-spacing': [ 'error', 'always' ],
		'arrow-spacing': [ 'error', {
			before: true,
			after: true
		} ],
		'block-spacing': [ 'error', 'always' ],
		'brace-style': [ 'error', '1tbs', { allowSingleLine: true } ],
		camelcase: [ 'error', { properties: 'never' } ],
		// 'comma-dangle': ['error', {
		// 	'arrays': 'never',
		// 	'objects': 'never',
		// 	'imports': 'never',
		// 	'exports': 'never',
		// 	'functions': 'never'
		// }],
		'comma-dangle': [ 'error', 'only-multiline' ],
		'comma-spacing': [ 'error', {
			before: false,
			after: true
		} ],
		'comma-style': [ 'error', 'last' ],
		'constructor-super': 'error',
		curly: [ 'error', 'multi-line' ],
		'dot-location': [ 'error', 'property' ],
		'eol-last': 'error',
		eqeqeq: [ 'error', 'always', { null: 'ignore' } ],
		'func-call-spacing': [ 'error', 'never' ],
		'generator-star-spacing': [ 'error', {
			before: true,
			after: true
		} ],
		'handle-callback-err': [ 'error', '^(err|error)$' ],
		indent: [ 'error', 'tab' ],
		'key-spacing': [ 'error', {
			beforeColon: false,
			afterColon: true
		} ],
		'keyword-spacing': [ 'error', {
			before: true,
			after: true
		} ],
		'new-cap': [ 'error', {
			newIsCap: true,
			capIsNew: false
		} ],
		'new-parens': 'error',
		'newline-per-chained-call': 'error',
		'no-array-constructor': 'error',
		'no-caller': 'error',
		'no-class-assign': 'error',
		'no-compare-neg-zero': 'error',
		'no-cond-assign': 'error',
		'no-const-assign': 'error',
		'no-constant-condition': [ 'error', { checkLoops: false } ],
		'no-control-regex': 'error',
		'no-debugger': 'error',
		'no-delete-var': 'error',
		'no-dupe-args': 'error',
		'no-dupe-class-members': 'error',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-empty-character-class': 'error',
		'no-empty-pattern': 'error',
		'no-eval': 'error',
		'no-ex-assign': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-extra-boolean-cast': 'error',
		'no-extra-parens': [ 'error', 'functions' ],
		'no-fallthrough': 'error',
		'no-floating-decimal': 'error',
		'no-func-assign': 'error',
		'no-global-assign': 'error',
		'no-implicit-globals': 'error',
		'no-implied-eval': 'error',
		'no-inner-declarations': [ 'error', 'functions' ],
		'no-invalid-regexp': 'error',
		'no-irregular-whitespace': 'error',
		'no-iterator': 'error',
		'no-label-var': 'error',
		'no-labels': [ 'error', {
			allowLoop: false,
			allowSwitch: false
		} ],
		'no-lone-blocks': 'error',
		'no-mixed-operators': [ 'error', {
			groups: [
				[ '==', '!=', '===', '!==', '>', '>=', '<', '<=' ],
				[ '&&', '||' ],
				[ 'in', 'instanceof' ]
			],
			allowSamePrecedence: true
		} ],
		'no-mixed-spaces-and-tabs': 'error',
		'no-multi-spaces': 'error',
		'no-multi-str': 'error',
		'no-multiple-empty-lines': [ 'error', {
			max: 1,
			maxEOF: 0
		} ],
		'no-negated-in-lhs': 'error',
		'no-new': 'error',
		'no-new-func': 'error',
		'no-new-object': 'error',
		'no-new-require': 'error',
		'no-new-symbol': 'error',
		'no-new-wrappers': 'error',
		'no-obj-calls': 'error',
		'no-octal': 'error',
		'no-octal-escape': 'error',
		'no-path-concat': 'error',
		'no-proto': 'error',
		'no-redeclare': 'error',
		'no-regex-spaces': 'error',
		'no-return-assign': [ 'error', 'except-parens' ],
		'no-return-await': 'error',
		'no-self-assign': 'error',
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-shadow-restricted-names': 'error',
		'no-sparse-arrays': 'error',
		'no-tabs': 'off',
		'no-template-curly-in-string': 'error',
		'no-this-before-super': 'error',
		'no-throw-literal': 'error',
		'no-trailing-spaces': 'error',
		'no-undef': 'error',
		'no-undef-init': 'error',
		'no-unexpected-multiline': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unneeded-ternary': [ 'error', { defaultAssignment: false } ],
		'no-unreachable': 'error',
		'no-unsafe-finally': 'error',
		'no-unsafe-negation': 'error',
		'no-unused-expressions': [ 'error', {
			allowShortCircuit: true,
			allowTernary: true,
			allowTaggedTemplates: true
		} ],
		'no-unused-vars': [ 'error', {
			vars: 'all',
			args: 'none',
			ignoreRestSiblings: true
		} ],
		'no-use-before-define': [ 'error', {
			functions: false,
			classes: false,
			variables: false
		} ],
		'no-useless-call': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-constructor': 'error',
		'no-useless-escape': 'error',
		'no-useless-rename': 'error',
		'no-useless-return': 'error',
		'no-whitespace-before-property': 'error',
		'no-with': 'error',
		'object-curly-newline': [ 'error', {
			ObjectExpression: { multiline: true },
			ObjectPattern: { multiline: true }
		} ],
		'object-curly-spacing': [ 'error', 'always' ],
		'object-property-newline': [ 'error', { allowMultiplePropertiesPerLine: false } ],
		'object-shorthand': [ 'warn', 'always' ],
		'one-var': [ 'error', 'never' ],
		'operator-linebreak': [ 'error', 'after', {
			overrides: {
				'?': 'before',
				':': 'before'
			}
		} ],
		'padded-blocks': [ 'error', {
			blocks: 'never',
			switches: 'never',
			classes: 'never'
		} ],
		'prefer-promise-reject-errors': 'error',
		quotes: [ 'error', 'single', {
			avoidEscape: true,
			allowTemplateLiterals: true
		} ],
		'rest-spread-spacing': [ 'error', 'never' ],
		semi: [ 'error', 'always' ],
		'semi-spacing': [ 'error', {
			before: false,
			after: true
		} ],
		'space-before-blocks': [ 'error', 'always' ],
		'space-before-function-paren': [ 'error', 'always' ],
		'space-in-parens': [ 'error', 'always', { exceptions: [ 'empty', '{}' ] } ],
		'space-infix-ops': 'error',
		'space-unary-ops': [ 'error', {
			words: true,
			nonwords: false
		} ],
		'spaced-comment': [ 'error', 'always' ],
		'symbol-description': 'error',
		'template-curly-spacing': [ 'error', 'never' ],
		'template-tag-spacing': [ 'error', 'never' ],
		'unicode-bom': [ 'error', 'never' ],
		'use-isnan': 'error',
		'valid-typeof': [ 'error', { requireStringLiterals: true } ],
		'wrap-iife': [ 'error', 'any', { functionPrototypeMethods: true } ],
		'yield-star-spacing': [ 'error', 'both' ],
		yoda: [ 'error', 'never' ],

		// eslint-plugin-import
		'import/export': 'error',
		'import/first': 'error',
		'import/no-duplicates': 'error',
		'import/no-webpack-loader-syntax': 'error',
	}
};
