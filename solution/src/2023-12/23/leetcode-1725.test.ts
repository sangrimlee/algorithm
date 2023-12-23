import { countGoodRectangles } from './leetcode-1725';

describe('2023-12-23: LeetCode 1725', () => {
  test('Example 1', () => {
    expect(
      countGoodRectangles([
        [5, 8],
        [3, 9],
        [5, 12],
        [16, 5],
      ]),
    ).toBe(3);
  });
  test('Example 2', () => {
    expect(
      countGoodRectangles([
        [2, 3],
        [3, 7],
        [4, 3],
        [3, 7],
      ]),
    ).toBe(3);
  });
});
