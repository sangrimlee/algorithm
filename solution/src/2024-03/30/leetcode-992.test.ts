import { subarraysWithKDistinct } from './leetcode-992';

describe('2024-03-30: LeetCode 992', () => {
  test('Example 1', () => {
    expect(subarraysWithKDistinct([1, 2, 1, 2, 3], 2)).toBe(7);
  });
  test('Example 2', () => {
    expect(subarraysWithKDistinct([1, 2, 1, 3, 4], 3)).toBe(3);
  });
});
