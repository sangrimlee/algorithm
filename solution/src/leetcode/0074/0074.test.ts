import { searchMatrix } from './0074';

describe('LeetCode 0074', () => {
  test('Example 1', () => {
    expect(
      searchMatrix(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 60],
        ],
        3,
      ),
    ).toBeTruthy();
  });

  test('Example 2', () => {
    expect(
      searchMatrix(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 60],
        ],
        13,
      ),
    ).toBeFalsy();
  });

  test('Example 3', () => {
    expect(searchMatrix([[1]], 2)).toBeFalsy();
  });
});
