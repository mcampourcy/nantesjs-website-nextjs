import js from "@eslint/js"
import pluginNext from '@next/eslint-plugin-next'
import reactPlugin from 'eslint-plugin-react'
import json from "@eslint/json";

export default [
  {
    ...js.configs.recommended,
    ...reactPlugin.configs.flat.recommended,
    ...reactPlugin.configs.flat['jsx-runtime'],
    plugins: {
      '@next/next': pluginNext
    },
    files: ['**/*.{js,mjs,jsx}'],
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs['core-web-vitals'].rules,
      "indent": ["error", 2],
      "object-curly-spacing": ["error", "always"]
    }
  },
  {
    plugins: {
      json
    },
    files: ["**/*.json"],
    language: "json/json"
  },
];
