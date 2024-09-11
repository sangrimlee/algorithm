import { largestCombination } from './leetcode-2275';

describe('2024-09-11: LeetCode 2275', () => {
  test('Example 1', () => {
    expect(largestCombination([16, 17, 71, 62, 12, 24, 14])).toBe(4);
  });
  test('Example 2', () => {
    expect(largestCombination([8, 8])).toBe(2);
  });
});
