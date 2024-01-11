module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true,
        'cypress/globals': true,
    },
    extends: ['eslint:recommended', 'plugin:cypress/recommended'],
    plugins: ['cypress'],
    rules: {
        // Adicione regras personalizadas ou modifique conforme necessário
    },
};