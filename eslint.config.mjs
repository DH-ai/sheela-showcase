import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-config-prettier';
import reactPlugin from 'eslint-plugin-react';
/** @type {import('eslint').Linter.Config}*/


export default [ 
	js.configs.recommended,
    {
        ...reactPlugin.configs.flat.recommended,
        settings:{
            react:{
                version: 'detect'
            }
        }
    },
    {
        "env": {
          "browser": true,
          "node": true
        }
      }
    ,
    reactPlugin.configs.flat["jsx-runtime"],
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
        rules: {
            'react/no-unescaped-entities': 'off',
            'react/prop-types': 'off',
        },
    },
	prettier // always put it last
]