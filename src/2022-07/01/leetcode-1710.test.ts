import { maximumUnits } from './leetcode-1710';

describe('2022-07-01: LeetCode 1710', () => {
  test('Example 1', () => {
    expect(
      maximumUnits(
        [
          [1, 3],
          [2, 2],
          [3, 1],
        ],
        4
      )
    ).toBe(8);
  });

  test('Example 2', () => {
    expect(
      maximumUnits(
        [
          [5, 10],
          [2, 5],
          [4, 7],
          [3, 9],
        ],
        10
      )
    ).toBe(91);
  });
});
