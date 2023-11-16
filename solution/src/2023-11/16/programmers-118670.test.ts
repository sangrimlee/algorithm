import { matrixAndOpertaion } from './programmers-118670';

describe('2023-11-16: Programmers 118670', () => {
  test('Example 1', () => {
    expect(
      matrixAndOpertaion(
        [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ],
        ['Rotate', 'ShiftRow'],
      ),
    ).toEqual([
      [8, 9, 6],
      [4, 1, 2],
      [7, 5, 3],
    ]);
  });
  test('Example 2', () => {
    expect(
      matrixAndOpertaion(
        [
          [8, 6, 3],
          [3, 3, 7],
          [8, 4, 9],
        ],
        ['Rotate', 'ShiftRow', 'ShiftRow'],
      ),
    ).toEqual([
      [8, 3, 3],
      [4, 9, 7],
      [3, 8, 6],
    ]);
  });
  test('Example 3', () => {
    expect(
      matrixAndOpertaion(
        [
          [1, 2, 3, 4],
          [5, 6, 7, 8],
          [9, 10, 11, 12],
        ],
        ['ShiftRow', 'Rotate', 'ShiftRow', 'Rotate'],
      ),
    ).toEqual([
      [1, 6, 7, 8],
      [5, 9, 10, 4],
      [2, 3, 12, 11],
    ]);
  });
  test('Example 4', () => {
    expect(
      matrixAndOpertaion(
        [
          [1, 2],
          [3, 4],
        ],
        ['ShiftRow', 'Rotate'],
      ),
    ).toEqual([
      [1, 3],
      [2, 4],
    ]);
  });
});
