import { maxUncrossedLines } from './leetcode-1035';

describe('2023-05-11: LeetCode 1035', () => {
  test('Example 1', () => {
    expect(maxUncrossedLines([1, 4, 2], [1, 2, 4])).toBe(2);
  });
  test('Example 2', () => {
    expect(maxUncrossedLines([2, 5, 1, 2, 5], [10, 5, 2, 1, 5, 2])).toBe(3);
  });
  test('Example 3', () => {
    expect(maxUncrossedLines([1, 3, 7, 1, 7, 5], [1, 9, 2, 5, 1])).toBe(2);
  });

  test('Example 4', () => {
    expect(maxUncrossedLines([2, 1], [1, 2, 1, 3, 3, 2])).toBe(2);
  });
});
