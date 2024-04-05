import { countBeautifulPairs } from './leetcode-2748';

describe('2024-04-05: LeetCode 2748', () => {
  test('Example 1', () => {
    expect(countBeautifulPairs([2, 5, 1, 4])).toBe(5);
  });
  test('Example 2', () => {
    expect(countBeautifulPairs([11, 21, 12])).toBe(2);
  });
});
