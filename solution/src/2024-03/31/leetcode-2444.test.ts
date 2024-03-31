import { countSubarrays } from './leetcode-2444';

describe('2024-03-31: LeetCode 2444', () => {
  test('Example 1', () => {
    expect(countSubarrays([1, 3, 5, 2, 7, 5], 1, 5)).toBe(2);
  });
  test('Example 2', () => {
    expect(countSubarrays([1, 1, 1, 1], 1, 1)).toBe(10);
  });
});
