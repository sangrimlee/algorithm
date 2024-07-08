import { minAddToMakeValid } from './leetcode-921';

describe('2024-07-08: LeetCode 921', () => {
  test('Example 1', () => {
    expect(minAddToMakeValid('())')).toBe(1);
  });
  test('Example 2', () => {
    expect(minAddToMakeValid('(((')).toBe(3);
  });
});
