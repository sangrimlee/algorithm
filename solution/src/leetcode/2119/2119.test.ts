import { isSameAfterReversals } from './2119';

describe('LeetCode 2119', () => {
  test('Example 1', () => {
    expect(isSameAfterReversals(526)).toBe(true);
  });
  test('Example 2', () => {
    expect(isSameAfterReversals(1800)).toBe(false);
  });
  test('Example 3', () => {
    expect(isSameAfterReversals(0)).toBe(true);
  });
});
