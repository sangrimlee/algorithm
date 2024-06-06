import { isNStraightHand } from './leetcode-846';

describe('2024-06-06: LeetCode 846', () => {
  test('Example 1', () => {
    expect(isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3)).toBe(true);
  });
  test('Example 2', () => {
    expect(isNStraightHand([1, 2, 3, 4, 5], 4)).toBe(false);
  });
});
