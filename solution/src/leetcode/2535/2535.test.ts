import { differenceOfSum } from './2535';

describe('LeetCode 2535', () => {
  test('Example 1', () => {
    expect(differenceOfSum([1, 15, 6, 3])).toBe(9);
  });
  test('Example 2', () => {
    expect(differenceOfSum([1, 2, 3, 4])).toBe(0);
  });
});
