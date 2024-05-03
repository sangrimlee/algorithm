import { minimumBoxes } from './leetcode-3074';

describe('2024-05-03: LeetCode 3074', () => {
  test('Example 1', () => {
    expect(minimumBoxes([1, 3, 2], [4, 3, 1, 5, 2])).toBe(2);
  });
  test('Example 2', () => {
    expect(minimumBoxes([5, 5, 5], [2, 4, 2, 7])).toBe(4);
  });
});
