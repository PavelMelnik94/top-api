module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir : __dirname, 
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		"@typescript-eslint/ban-types": "off",
		"@typescript-eslint/no-unused-vars": ["off"],
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/explicit-function-return-type": ["warn"],
		"block-scoped-var": "warn",
		"accessor-pairs": "warn",
		// "require-await": "warn",
		"curly": 0,
		"no-dupe-keys": "error",
		"no-dupe-else-if": "error",
		"no-dupe-class-members": "error",
		"no-const-assign": "error",
		"no-cond-assign": "error",
		"getter-return": "error",
		"no-setter-return": "error",
		"no-unreachable": "error",
		"no-useless-catch": "error",
		"eqeqeq": "warn",
		// "no-unused-vars": "warn",
		"for-direction": "error",
		"no-empty-character-class": "error",
		"no-duplicate-case": "error",
		"prettier/prettier": [
			"error",
			{
				"singleQuote": true,
				"useTabs": true,
				"semi": true,
				"trailingComma": "all",
				"bracketSpacing": true,
				"printWidth": 100,
				"endOfLine": "auto"
			}
		]
  },
};
