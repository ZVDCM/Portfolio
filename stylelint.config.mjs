/** @type {import('stylelint').Config} */
const config = {
    rules: {
        'at-rule-no-deprecated': [true, { ignoreAtRules: ['apply'] }],
    },
    extends: ['stylelint-config-standard', 'stylelint-config-tailwindcss'],
};

export default config;
