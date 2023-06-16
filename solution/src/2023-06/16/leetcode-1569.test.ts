import { numOfWays } from './leetcode-1569';

describe('2023-06-16: LeetCode 1569', () => {
  test('Example 1', () => {
    expect(numOfWays([2, 1, 3])).toEqual(1);
  });
  test('Example 2', () => {
    expect(numOfWays([3, 4, 5, 1, 2])).toEqual(5);
  });
  test('Example 3', () => {
    expect(numOfWays([1, 2, 3])).toEqual(0);
  });
  test('Example 4', () => {
    expect(
      numOfWays([
        31, 23, 14, 24, 15, 12, 25, 28, 5, 35, 17, 6, 9, 11, 1, 27, 18, 20, 2, 3, 33, 10, 13, 4, 7,
        36, 32, 29, 8, 30, 26, 19, 34, 22, 21, 16,
      ]),
    ).toEqual(936157466);
  });
});
