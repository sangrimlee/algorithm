import { countNicePairs } from './leetcode-1814';

describe('2023-11-21: LeetCode 1814', () => {
  test('Example 1', () => {
    expect(countNicePairs([42, 11, 1, 97])).toBe(2);
  });
  test('Example 2', () => {
    expect(countNicePairs([13, 10, 35, 24, 76])).toBe(4);
  });
});
