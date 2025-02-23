import { sortTheStudents } from './2545';

describe('LeetCode 2545', () => {
  test('Example 1', () => {
    expect(
      sortTheStudents(
        [
          [10, 6, 9, 1],
          [7, 5, 11, 2],
          [4, 8, 3, 15],
        ],
        2,
      ),
    ).toEqual([
      [7, 5, 11, 2],
      [10, 6, 9, 1],
      [4, 8, 3, 15],
    ]);
  });
  test('Example 2', () => {
    expect(
      sortTheStudents(
        [
          [3, 4],
          [5, 6],
        ],
        0,
      ),
    ).toEqual([
      [5, 6],
      [3, 4],
    ]);
  });
});
