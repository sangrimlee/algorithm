import { minLength } from './2696';

describe('LeetCode 2696', () => {
  test('Example 1', () => {
    expect(minLength('ABFCACDB')).toBe(2);
  });
  test('Example 2', () => {
    expect(minLength('ACBBD')).toBe(5);
  });
});
