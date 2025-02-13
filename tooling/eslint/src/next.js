import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import nextPlugin from '@next/eslint-plugin-next';

export default tseslint.config(
  reactPlugin.configs.flat.recommended ?? {},
  reactPlugin.configs.flat['jsx-runtime'] ?? {},
  jsxA11yPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.react,
  /** FlatConfig를 지원하지 않는 플러그인은 직접 설정 추가 */
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    plugins: {
      'react-hooks': reactHooksPlugin,
      '@next/next': nextPlugin,
    },
    rules: {
      ...reactHooksPlugin.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      '@next/next/no-duplicate-head': 'off',
    },
    languageOptions: {
      globals: {
        React: 'writable',
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
);
