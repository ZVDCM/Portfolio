import { FlatCompat } from '@eslint/eslintrc';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import checkFile from 'eslint-plugin-check-file';

const compat = new FlatCompat({
    baseDirectory: import.meta.dirname,
});

/**
 * @type {import("eslint").Linter.Config}
 */
const eslintConfig = [
    {
        ignores: [
            '**/node_modules/**',
            '**/.next/**',
            '**/assets/**',
            '**/*.css',
            '**/*.ico',
            '**/*.ttf',
        ],
    },
    ...compat.extends('next', 'next/core-web-vitals', 'next/typescript'),
    eslintConfigPrettier,
    {
        files: ['**/*.mjs', '**/*.ts', '**/*.tsx'],
        rules: {
            'no-console': ['error', { allow: ['warn', 'error'] }],
            'sort-imports': [
                'error',
                {
                    ignoreCase: false,
                    ignoreDeclarationSort: true,
                    ignoreMemberSort: false,
                },
            ],
            'import/order': [
                'error',
                {
                    groups: [
                        'builtin',
                        'external',
                        'internal',
                        'parent',
                        'sibling',
                        'index',
                        'object',
                    ],
                    pathGroups: [
                        {
                            pattern: '@/**',
                            group: 'internal',
                            position: 'before',
                        },
                    ],
                    pathGroupsExcludedImportTypes: ['builtin'],
                    'newlines-between': 'always',
                    alphabetize: { order: 'asc', caseInsensitive: true },
                },
            ],
            'import/no-restricted-paths': [
                'error',
                {
                    zones: [
                        {
                            target: './src/features/contact-me',
                            from: './src/features',
                            except: ['./contact-me'],
                        },
                        {
                            target: './src/features',
                            from: './src/app',
                        },
                        {
                            target: ['./src/components', './src/hooks', './src/lib', './src/types'],
                            from: ['./src/features', './src/app'],
                        },
                        {
                            target: './src/config',
                            from: './src',
                            except: ['./config'],
                        },
                    ],
                },
            ],
            '@typescript-eslint/naming-convention': [
                'error',
                {
                    selector: 'interface',
                    format: ['PascalCase'],
                    custom: {
                        regex: '^I[A-Z]',
                        match: true,
                    },
                },
                {
                    selector: 'typeAlias',
                    format: ['PascalCase'],
                    custom: {
                        regex: '^T[A-Z]',
                        match: true,
                    },
                },
                {
                    selector: 'typeParameter',
                    format: ['PascalCase'],
                    custom: {
                        regex: '^T[A-Z]',
                        match: true,
                    },
                },
                {
                    selector: 'memberLike',
                    modifiers: ['private'],
                    format: ['camelCase'],
                    leadingUnderscore: 'require',
                },
                {
                    selector: 'class',
                    format: ['PascalCase'],
                },
            ],
        },
    },
    {
        files: ['src/**/*.*'],
        plugins: {
            'check-file': checkFile,
        },
        rules: {
            'check-file/no-index': 'error',
            'check-file/filename-naming-convention': [
                'error',
                {
                    '**/*.{ts,tsx}': 'KEBAB_CASE',
                },
                {
                    ignoreMiddleExtensions: true,
                },
            ],
            'check-file/folder-naming-convention': [
                'error',
                {
                    '!(src/app)/**/*': 'KEBAB_CASE',
                    '!(**/__tests__)/**/*': 'KEBAB_CASE',
                },
            ],
        },
    },
];

export default eslintConfig;
