import { numOfArrays } from './1420';

describe('LeetCode 1420', () => {
  test('Example 1', () => {
    expect(numOfArrays(2, 3, 1)).toBe(6);
  });
  test('Example 2', () => {
    expect(numOfArrays(5, 2, 3)).toBe(0);
  });
  test('Example 3', () => {
    expect(numOfArrays(9, 1, 1)).toBe(1);
  });
});
