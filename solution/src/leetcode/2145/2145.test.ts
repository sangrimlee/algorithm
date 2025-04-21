import { numberOfArrays } from './2145';

describe('LeetCode 2145', () => {
  test('Example 1', () => {
    expect(numberOfArrays([1, -3, 4], 1, 6)).toBe(2);
  });
  test('Example 2', () => {
    expect(numberOfArrays([3, -4, 5, 1, -2], -4, 5)).toBe(4);
  });
  test('Example 3', () => {
    expect(numberOfArrays([4, -7, 2], 3, 6)).toBe(0);
  });
});
