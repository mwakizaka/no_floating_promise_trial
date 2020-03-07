module.exports = {
    "extends": [
        "eslint:recommended",
        'plugin:@typescript-eslint/eslint-recommended',
        "plugin:@typescript-eslint/recommended",
    ],
    "plugins": [
        "@typescript-eslint"
    ],
    "env": {
        "es2017": true,
        "node": true,
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "rules": {
        "@typescript-eslint/no-floating-promises": "error",
    }
};
