import { check } from './1752';

describe('LeetCode 1752', () => {
  test('Example 1', () => {
    expect(check([3, 4, 5, 1, 2])).toBe(true);
  });
  test('Example 2', () => {
    expect(check([2, 1, 3, 4])).toBe(false);
  });
  test('Example 3', () => {
    expect(check([1, 2, 3])).toBe(true);
  });
});
