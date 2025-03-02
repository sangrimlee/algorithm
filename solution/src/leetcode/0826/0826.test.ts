import { maxProfitAssignment } from './0826';

describe('LeetCode 0826', () => {
  test('Example 1', () => {
    expect(maxProfitAssignment([2, 4, 6, 8, 10], [10, 20, 30, 40, 50], [4, 5, 6, 7])).toBe(100);
  });
  test('Example 2', () => {
    expect(maxProfitAssignment([85, 47, 57], [24, 66, 99], [40, 25, 25])).toBe(0);
  });
});
