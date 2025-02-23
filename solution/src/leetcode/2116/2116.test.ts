import { canBeValid } from './2116';

describe('LeetCode 2116', () => {
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
