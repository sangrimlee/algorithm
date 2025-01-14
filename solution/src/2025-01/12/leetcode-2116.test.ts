import { canBeValid } from './leetcode-2116';

describe('2025-01-12: LeetCode 2116', () => {
  test('Example 1', () => {
    expect(canBeValid('))()))', '010100')).toBe(true);
  });
  test('Example 2', () => {
    expect(canBeValid('()()', '0000')).toBe(true);
  });
  test('Example 3', () => {
    expect(canBeValid(')', '0')).toBe(false);
  });
});
