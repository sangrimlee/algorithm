import { vowelStrings } from './leetcode-2586';

describe('2024-03-22: LeetCode 2586', () => {
  test('Example 1', () => {
    expect(vowelStrings(['are', 'amy', 'u'], 0, 2)).toBe(2);
  });
  test('Example 2', () => {
    expect(vowelStrings(['hey', 'aeo', 'mu', 'ooo', 'artro'], 1, 4)).toBe(3);
  });
});
