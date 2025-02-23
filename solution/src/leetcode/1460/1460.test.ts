import { canBeEqual } from './1460';

describe('LeetCode 1460', () => {
  test('Example 1', () => {
    expect(canBeEqual([1, 2, 3, 4], [2, 4, 1, 3])).toBe(true);
  });
  test('Example 2', () => {
    expect(canBeEqual([7], [7])).toBe(true);
  });
  test('Example 3', () => {
    expect(canBeEqual([3, 7, 9], [3, 7, 11])).toBe(false);
  });
});
