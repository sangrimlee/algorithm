import { configs } from '@algorithm/eslint-config';

export default [
  { ignores: ['.next/**'] },
  ...configs.base,
  ...configs.next,
  {
    rules: {
      'react/no-unknown-property': ['error', { ignore: ['jsx', 'global'] }],
    },
  },
  configs.prettier,
];
