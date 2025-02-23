import { triangularSum } from './2221';

describe('LeetCode 2221', () => {
  test('Example 1', () => {
    expect(triangularSum([1, 2, 3, 4, 5])).toBe(8);
  });
  test('Example 2', () => {
    expect(triangularSum([5])).toBe(5);
  });
});
