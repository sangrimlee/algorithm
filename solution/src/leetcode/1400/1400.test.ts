import { canConstruct } from './1400';

describe('LeetCode 1400', () => {
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
