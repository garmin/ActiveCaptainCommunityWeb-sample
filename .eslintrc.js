module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'eslint:recommended',
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'plugin:prettier/recommended',
        'plugin:jest-dom/recommended',
        'plugin:testing-library/recommended',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        // Please refer to https://eslint.org/docs/rules/ for rule names
        // and categorization

        // Errors
        'no-control-regex': 'off',
        'no-template-curly-in-string': 'error',

        // Best Practices
        'class-methods-use-this': 'off',
        'guard-for-in': 'off',
        'no-else-return': 'off',
        radix: 'off',
        'wrap-iife': 'off',
        'function-paren-newline': 'off',
        quotes: 'off',

        // Variables
        'no-undef': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',

        // Styles
        camelcase: 'error',
        'comma-dangle': 'off',
        indent: 'off',
        'linebreak-style': 'off',
        'max-len': ['error', 120, { ignoreComments: true }],
        'newline-per-chained-call': 'off',
        'no-bitwise': 'off',
        'no-mixed-operators': 'off',
        'no-multi-spaces': 'error',
        'no-plusplus': 'off',
        'no-restricted-syntax': ['off', 'ForInStatement'],
        'no-tabs': 'off',
        'no-trailing-spaces': 'error',
        'no-underscore-dangle': 'off',
        'one-var': 'off',
        'quote-props': 'off',
        'object-curly-newline': [
            'error',
            {
                ObjectExpression: {
                    multiline: true,
                    minProperties: 2,
                },
                ObjectPattern: { multiline: true },
                ImportDeclaration: {
                    multiline: true,
                    minProperties: 6,
                },
                ExportDeclaration: {
                    multiline: true,
                    minProperties: 4,
                },
            },
        ],
        'array-bracket-spacing': 'off',

        // ES6
        'arrow-body-style': 'off',
        'arrow-parens': 'off',
        'no-useless-constructor': 'off',
        'consistent-return': 'off',
        'object-shorthand': 'off',
        'prefer-arrow-callback': 'off',
        'prefer-spread': 'off',
        'prefer-template': 'off',

        // React
        'react/jsx-uses-vars': 1,
        'react/jsx-uses-react': 1,
        'react/forbid-prop-types': 'off',
        'react/jsx-closing-bracket-location': 'off',
        'react/jsx-indent': 'off',
        'react/jsx-indent-props': 'off',
        'react/jsx-filename-extension': ['error', { extensions: ['.js', '.tsx'] }],
        'react/jsx-first-prop-new-line': 'off',
        'react/no-array-index-key': 'error',
        'react/no-did-mount-set-state': 'off',
        'react/no-multi-comp': 'off',
        'react/prefer-stateless-function': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/sort-comp': 'off',
        'react/no-did-update-set-state': 'off',

        // jsx-a11y
        'jsx-a11y/anchor-has-content': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/href-no-hash': 'off',
        'jsx-a11y/label-has-for': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/no-static-element-interact': 'off',

        // import
        'import/no-extraneous-dependencies': 'off',
        'import/prefer-default-export': 'off',
        'import/first': 'off',
        'import/no-named-as-default': 'off',
        'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },
};
