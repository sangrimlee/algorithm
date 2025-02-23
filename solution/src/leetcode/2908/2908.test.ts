import { minimumSum } from './2908';

describe('LeetCode 2908', () => {
  test('Example 1', () => {
    expect(minimumSum([8, 6, 1, 5, 3])).toBe(9);
  });
  test('Example 2', () => {
    expect(minimumSum([5, 4, 8, 7, 10, 2])).toBe(13);
  });
  test('Example 3', () => {
    expect(minimumSum([6, 5, 4, 3, 4, 5])).toBe(-1);
  });
});
