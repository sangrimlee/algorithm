import { configs } from '@algorithm/eslint-config';

export default [{ ignores: ['.next/**'] }, ...configs.base, ...configs.next, configs.prettier];
