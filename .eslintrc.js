module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
    ],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        'no-console': 'off',
        'no-debugger': 'off',
        'linebreak-style': 'off',
        'max-len' : ["error", {code : 300}] ,// 此处为具体添加代码
        'import/extensions': 'off'
    },
};