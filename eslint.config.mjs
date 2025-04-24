import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import checkFile from 'eslint-plugin-check-file';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends('next', 'next/core-web-vitals', 'next/typescript'),
    eslintConfigPrettier,
    {
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
                    'newlines-between': 'always',
                    alphabetize: { order: 'asc', caseInsensitive: true },
                },
            ],
            'import/no-restricted-paths': [
                'error',
                {
                    zones: [
                        {
                            target: './src/features/feature-one',
                            from: './src/features',
                            except: ['./feature-one'],
                        },
                        {
                            target: './src/features/feature-two',
                            from: './src/features',
                            except: ['./feature-two'],
                        },
                        {
                            target: './src/features',
                            from: './src/app',
                        },
                        {
                            target: [
                                './src/components',
                                './src/hooks',
                                './src/lib',
                                './src/types',
                                './src/utils',
                            ],
                            from: ['./src/features', './src/app'],
                        },
                    ],
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
