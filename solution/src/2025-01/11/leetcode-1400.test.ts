import { canConstruct } from './leetcode-1400';

describe('2025-01-11: LeetCode 1400', () => {
  test('Example 1', () => {
    expect(canConstruct('annabelle', 2)).toBe(true);
  });
  test('Example 2', () => {
    expect(canConstruct('leetcode', 3)).toBe(false);
  });
  test('Example 3', () => {
    expect(canConstruct('true', 4)).toBe(true);
  });
});
