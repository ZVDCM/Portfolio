/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
    semi: true, // Always use semicolons
    singleQuote: true, // Prefer single quotes
    trailingComma: 'all', // Add trailing commas where possible (more Git-friendly)
    printWidth: 100, // Wrap lines at 100 characters
    tabWidth: 4, // Four-space indentation
    useTabs: false, // Use spaces over tabs
    arrowParens: 'always', // Always include parens in arrow functions
    bracketSpacing: true, // Add spaces inside object literals: { a: 1 }
    endOfLine: 'lf', // Normalize to Unix line endings
    plugins: ['prettier-plugin-tailwindcss'], // Optionally list custom plugins
};

export default config;
