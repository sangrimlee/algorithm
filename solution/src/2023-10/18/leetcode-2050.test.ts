import { minimumTime } from './leetcode-2050';

describe('2023-10-18: LeetCode 2050', () => {
  test('Example 1', () => {
    expect(
      minimumTime(
        3,
        [
          [1, 3],
          [2, 3],
        ],
        [3, 2, 5],
      ),
    ).toBe(8);
  });
  test('Example 2', () => {
    expect(
      minimumTime(
        5,
        [
          [1, 5],
          [2, 5],
          [3, 5],
          [3, 4],
          [4, 5],
        ],
        [1, 2, 3, 4, 5],
      ),
    ).toBe(12);
  });
});
