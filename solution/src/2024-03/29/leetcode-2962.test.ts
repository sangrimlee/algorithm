import { countSubarrays } from './leetcode-2962';

describe('2024-03-29: LeetCode 2962', () => {
  test('Example 1', () => {
    expect(countSubarrays([1, 3, 2, 3, 3], 2)).toBe(6);
  });
  test('Example 2', () => {
    expect(countSubarrays([1, 4, 2, 1], 3)).toBe(0);
  });
});
