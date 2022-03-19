module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
        "jest": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended"
    ],
    "rules": {
        // 文末にセミコロンがない場合警告
        "semi": "warn",
        // Reactのimport文必須化を無効
        "react/react-in-jsx-scope": "off",
        // PropTypesの記述必須化を無効
        "react/prop-types": "off",
        // keypropの定義必須化を無効
        "react/jsx-key": "off",
        // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-var-requires.md
        "@typescript-eslint/no-var-requires": "off",
    }
};
