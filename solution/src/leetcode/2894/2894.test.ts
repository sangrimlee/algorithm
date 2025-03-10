import { differenceOfSums } from './2894';

describe('LeetCode 2894', () => {
  test('Example 1', () => {
    expect(differenceOfSums(10, 3)).toBe(19);
  });
  test('Example 2', () => {
    expect(differenceOfSums(5, 6)).toBe(15);
  });
  test('Example 3', () => {
    expect(differenceOfSums(5, 1)).toBe(-15);
  });
});
