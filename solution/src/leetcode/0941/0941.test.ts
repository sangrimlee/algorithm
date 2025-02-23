import { validMountainArray } from './0941';

describe('LeetCode 0941', () => {
  test('Example 1', () => {
    expect(validMountainArray([2, 1])).toBe(false);
  });
  test('Example 2', () => {
    expect(validMountainArray([3, 5, 5])).toBe(false);
  });
  test('Example 3', () => {
    expect(validMountainArray([0, 3, 2, 1])).toBe(true);
  });
  test('Example 4', () => {
    expect(validMountainArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(false);
  });
});
