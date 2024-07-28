import { secondMinimum } from './leetcode-2045';

describe('2024-07-28: LeetCode 2045', () => {
  test('Example 1', () => {
    expect(
      secondMinimum(
        5,
        [
          [1, 2],
          [1, 3],
          [1, 4],
          [3, 4],
          [4, 5],
        ],
        3,
        5,
      ),
    ).toBe(13);
  });
  test('Example 2', () => {
    expect(secondMinimum(2, [[1, 2]], 3, 2)).toBe(11);
  });
});
