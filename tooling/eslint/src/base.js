import jseslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import turboPlugin from 'eslint-plugin-turbo';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';

export default tseslint.config(
  jseslint.configs.recommended,
  tseslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  turboPlugin.configs['flat/recommended'],
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    extends: [importPlugin.flatConfigs.recommended, importPlugin.flatConfigs.typescript],
    rules: {
      /**
       * `typescript-eslint`가 동일한 검사를 제공하므로, 다음 규칙을 사용하지 않음
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
      globals: {
        ...globals.node,
      },
      parserOptions: { projectService: true },
    },
    settings: {
      'import/resolver': {
        node: true,
        typescript: true,
      },
    },
  },
);
