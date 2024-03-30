import { minLength } from './leetcode-2696';

describe('2024-03-30: LeetCode 2696', () => {
  test('Example 1', () => {
    expect(minLength('ABFCACDB')).toBe(2);
  });
  test('Example 2', () => {
    expect(minLength('ACBBD')).toBe(5);
  });
});
