module.exports = {
  root: true,
  extends: ['@algorithm/eslint-config/next'],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
};
