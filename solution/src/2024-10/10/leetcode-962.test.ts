import { maxWidthRamp } from './leetcode-962';

describe('2024-10-10: LeetCode 962', () => {
  test('Example 1', () => {
    expect(maxWidthRamp([6, 0, 8, 2, 1, 5])).toBe(4);
  });
  test('Example 2', () => {
    expect(maxWidthRamp([9, 8, 1, 0, 1, 9, 4, 0, 4, 1])).toBe(7);
  });
});
