import { isToeplitzMatrix } from './leetcode-766';

describe('2022-10-31: Leetcode 766', () => {
  test('Example 1', () => {
    const matrix = [
      [1, 2, 3, 4],
      [5, 1, 2, 3],
      [9, 5, 1, 2],
    ];
    expect(isToeplitzMatrix(matrix)).toBeTruthy();
  });

  test('Example 2', () => {
    const matrix = [
      [1, 2],
      [2, 2],
    ];
    expect(isToeplitzMatrix(matrix)).toBeFalsy();
  });
});
