import { containsPattern } from './leetcode-1566';

describe('2023-12-11: LeetCode 1566', () => {
  test('Example 1', () => {
    expect(containsPattern([1, 2, 4, 4, 4, 4], 1, 3)).toBe(true);
  });
  test('Example 2', () => {
    expect(containsPattern([1, 2, 1, 2, 1, 1, 1, 3], 2, 2)).toBe(true);
  });
  test('Example 3', () => {
    expect(containsPattern([1, 2, 1, 2, 1, 3], 2, 3)).toBe(false);
  });
});
