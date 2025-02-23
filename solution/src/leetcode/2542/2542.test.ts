import { maxScore } from './2542';

describe('LeetCode 2542', () => {
  test('Example 1', () => {
    expect(maxScore([1, 3, 3, 2], [2, 1, 3, 4], 3)).toBe(12);
  });
  test('Example 2', () => {
    expect(maxScore([4, 2, 3, 1, 1], [7, 5, 10, 9, 6], 1)).toBe(30);
  });
  test('Example 3', () => {
    expect(maxScore([2, 1, 14, 12], [11, 7, 13, 6], 3)).toBe(168);
  });
});
