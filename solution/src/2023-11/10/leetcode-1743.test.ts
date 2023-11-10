import { restoreArray } from './leetcode-1743';

describe('2023-11-10: LeetCode 1743', () => {
  test('Example 1', () => {
    expect(
      restoreArray([
        [2, 1],
        [3, 4],
        [3, 2],
      ]),
    ).toEqual([1, 2, 3, 4]);
  });
  test('Example 2', () => {
    expect(
      restoreArray([
        [4, -2],
        [1, 4],
        [-3, 1],
      ]),
    ).toEqual([-2, 4, 1, -3]);
  });
  test('Example 3', () => {
    expect(restoreArray([[100000, -100000]])).toEqual([100000, -100000]);
  });
});
