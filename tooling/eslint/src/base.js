import path from 'node:path';

import jseslint from '@eslint/js';
import { includeIgnoreFile } from '@eslint/compat';
import tseslint from 'typescript-eslint';
import turboPlugin from 'eslint-plugin-turbo';
import importPlugin from 'eslint-plugin-import';

export default tseslint.config(
  includeIgnoreFile(path.join(import.meta.dirname, '../../../.gitignore')),
  { ignores: ['**/*.config.*'] },
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    extends: [
      jseslint.configs.recommended,
      tseslint.configs.recommended,
      tseslint.configs.recommendedTypeChecked,
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
      turboPlugin.configs['flat/recommended'],
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
    ],
    rules: {
      /**
       * `typescript-eslint`가 동일한 검사를 제공하므로, `eslint-plugin-import`의 다음 규칙을 사용하지 않음
       * https://typescript-eslint.io/troubleshooting/typed-linting/performance/#eslint-plugin-import
       */
      'import/named': 'off',
      'import/namespace': 'off',
      'import/default': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-unresolved': 'off',
    },
  },
  {
    linterOptions: { reportUnusedDisableDirectives: true },
    languageOptions: {
      parserOptions: { projectService: true },
    },
  },
);
