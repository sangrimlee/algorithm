module.exports = {
  root: true,
  extends: ['@algorithm'],
  rules: {
    'turbo/no-undeclared-env-vars': [
      'error',
      {
        allowList: ['^LEETCODE'],
      },
    ],
  },
};
