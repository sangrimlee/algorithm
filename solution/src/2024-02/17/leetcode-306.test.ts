import { isAdditiveNumber } from './leetcode-306';

describe('2024-02-17: LeetCode 306', () => {
  test('Example 1', () => {
    expect(isAdditiveNumber('112358')).toBe(true);
  });
  test('Example 2', () => {
    expect(isAdditiveNumber('199100199')).toBe(true);
  });
});
