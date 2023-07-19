module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "ignorePatterns": ["./node_modules", "vite.serverConfig.ts"],
    "extends": [
        "airbnb",
        "airbnb-typescript",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "prettier"
    ],
    "rules": {
        "import/extensions": "off",
        "react/no-array-index-key": "off",
        "no-underscore-dangle": "off",
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": ["error"],
        "@typescript-eslint/naming-convention": "off",
        "react/function-component-definition": [
            2,
            {
                namedComponents: "arrow-function",
                unnamedComponents: "arrow-function",
            },
        ],
        "no-console": "error",
        "class-methods-use-this": "off",
        "import/no-extraneous-dependencies": "off",
        "import/prefer-default-export": "off",
        "react/prop-types": "off",
        "max-len": ["error", { "code": 120 }],
        "react/jsx-props-no-spreading": "off",
        "jsx-a11y/no-autofocus": "off",
        "react/require-default-props": "off",
        "react/react-in-jsx-scope": "off",
        "jsx-a11y/label-has-associated-control": "off",
        "typescript-eslint/no-shadow": "off",
        "react/display-name": "off",
        "react/button-has-type": "off",
        "no-restricted-globals": "off",
        "react/jsx-no-useless-fragment": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "react/no-unused-prop-types": "off",
        "no-nested-ternary": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/no-noninteractive-element-interactions": "off",
        "jsx-a11y/control-has-associated-label": "off",
        "no-alert": "off",
        "no-param-reassign": 'off',
        "react/state-in-constructor": "off"
    },
}
