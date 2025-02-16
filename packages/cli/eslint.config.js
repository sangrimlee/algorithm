import { configs } from '@algorithm/eslint-config';

export default [
  { ignores: ['dist/**'] },
  ...configs.base,
  ...configs.jest,
  {
    rules: {
      'turbo/no-undeclared-env-vars': [
        'error',
        {
          allowList: ['^LEETCODE'],
        },
      ],
    },
  },
  configs.prettier,
];
