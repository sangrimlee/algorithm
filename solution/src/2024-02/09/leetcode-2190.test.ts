import { mostFrequent } from './leetcode-2190';

describe('2024-02-09: LeetCode 2190', () => {
  test('Example 1', () => {
    expect(mostFrequent([1, 100, 200, 1, 100], 1)).toBe(100);
  });
  test('Example 2', () => {
    expect(mostFrequent([2, 2, 2, 2, 3], 2)).toBe(2);
  });
});
