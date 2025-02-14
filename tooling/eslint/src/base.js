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
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  turboPlugin.configs['flat/recommended'],
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
