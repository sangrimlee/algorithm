import { configs } from '@algorithm/eslint-config';

export default [{ ignores: ['dist/**'] }, ...configs.base, ...configs.jest, configs.prettier];
