import { countCompleteDayPairs } from './leetcode-3184';

describe('2024-06-25: LeetCode 3184', () => {
  test('Example 1', () => {
    expect(countCompleteDayPairs([12, 12, 30, 24, 24])).toBe(2);
  });
  test('Example 2', () => {
    expect(countCompleteDayPairs([72, 48, 24, 3])).toBe(3);
  });
});
