import { alternatingSubarray } from './leetcode-2765';

describe('2024-04-06: LeetCode 2765', () => {
  test('Example 1', () => {
    expect(alternatingSubarray([2, 3, 4, 3, 4])).toBe(4);
  });
  test('Example 2', () => {
    expect(alternatingSubarray([4, 5, 6])).toBe(2);
  });
});
