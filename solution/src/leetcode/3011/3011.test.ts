import { canSortArray } from './3011';

describe('LeetCode 3011', () => {
  test('Example 1', () => {
    expect(canSortArray([8, 4, 2, 30, 15])).toBe(true);
  });
  test('Example 2', () => {
    expect(canSortArray([1, 2, 3, 4, 5])).toBe(true);
  });
  test('Example 3', () => {
    expect(canSortArray([3, 16, 8, 4, 2])).toBe(false);
  });
});
