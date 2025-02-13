import tseslint from 'typescript-eslint';
import jestPlugin from 'eslint-plugin-jest';

export default tseslint.config(
  jestPlugin.configs['flat/recommended'],
  jestPlugin.configs['flat/style'],
);
