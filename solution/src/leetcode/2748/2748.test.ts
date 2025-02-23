import { countBeautifulPairs } from './2748';

describe('LeetCode 2748', () => {
  test('Example 1', () => {
    expect(countBeautifulPairs([2, 5, 1, 4])).toBe(5);
  });
  test('Example 2', () => {
    expect(countBeautifulPairs([11, 21, 12])).toBe(2);
  });
});
