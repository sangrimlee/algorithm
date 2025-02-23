import { isNStraightHand } from './0846';

describe('LeetCode 0846', () => {
  test('Example 1', () => {
    expect(isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3)).toBe(true);
  });
  test('Example 2', () => {
    expect(isNStraightHand([1, 2, 3, 4, 5], 4)).toBe(false);
  });
});
