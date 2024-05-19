import { maximumValueSum } from './leetcode-3068';

describe('2024-05-19: LeetCode 3068', () => {
  test('Example 1', () => {
    expect(
      maximumValueSum([1, 2, 1], 3, [
        [0, 1],
        [0, 2],
      ]),
    ).toBe(6);
  });
  test('Example 2', () => {
    expect(maximumValueSum([2, 3], 7, [[0, 1]])).toBe(9);
  });
  test('Example 3', () => {
    expect(
      maximumValueSum([7, 7, 7, 7, 7, 7], 3, [
        [0, 1],
        [0, 2],
        [0, 3],
        [0, 4],
        [0, 5],
      ]),
    ).toBe(42);
  });
});
