import { checkSubarraySum } from './leetcode-523';

describe('2024-06-08: LeetCode 523', () => {
  test('Example 1', () => {
    expect(checkSubarraySum([23, 2, 4, 6, 7], 6)).toBe(true);
  });
  test('Example 2', () => {
    expect(checkSubarraySum([23, 2, 6, 4, 7], 6)).toBe(true);
  });
  test('Example 3', () => {
    expect(checkSubarraySum([23, 2, 6, 4, 7], 13)).toBe(false);
  });
});
