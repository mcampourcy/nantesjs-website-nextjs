import { defineConfig, globalIgnores } from "eslint/config";
import js from '@eslint/js'
import pluginNext from '@next/eslint-plugin-next'
import reactPlugin from 'eslint-plugin-react'
import json from '@eslint/json'

export default defineConfig([
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
  {
    ...js.configs.recommended,
    ...reactPlugin.configs.flat.recommended,
    ...reactPlugin.configs.flat['jsx-runtime'],
    plugins: {
      '@next/next': pluginNext,
    },
    files: ['**/*.{js,mjs,jsx}'],
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs['core-web-vitals'].rules,
    },
  },
  {
    plugins: {
      json,
    },
    files: ['**/*.json'],
    language: 'json/json',
  },
])
