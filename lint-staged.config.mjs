import path from 'path';

const buildEslintCommand = (filenames) =>
    `next lint --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`;

const config = {
    '*.{js,jsx,mjs,ts,tsx}': ['prettier --write', buildEslintCommand],
    '*.{css,scss,less}': ['stylelint --fix', 'prettier --write'],
    '*.{html,json,md,yaml,yml}': ['prettier --write'],
};

export default config;
