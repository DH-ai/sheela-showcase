import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config}*/


export default [ 
	js.configs.recommended,
	{
		files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
        languageOptions: {
            globals:{...globals.node, ...globals.browser}
        },
        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
    },
	prettier // always put it last
]