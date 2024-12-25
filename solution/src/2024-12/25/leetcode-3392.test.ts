import { countSubarrays } from './leetcode-3392';

describe('2024-12-25: LeetCode 3392', () => {
  test('Example 1', () => {
    expect(countSubarrays([1, 2, 1, 4, 1])).toBe(1);
  });
  test('Example 2', () => {
    expect(countSubarrays([1, 1, 1])).toBe(0);
  });
});
