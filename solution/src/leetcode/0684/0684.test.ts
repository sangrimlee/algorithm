import { findRedundantConnection } from './0684';

describe('LeetCode 0684', () => {
  test('Example 1', () => {
    expect(
      findRedundantConnection([
        [1, 2],
        [1, 3],
        [2, 3],
      ]),
    ).toEqual([2, 3]);
  });
  test('Example 2', () => {
    expect(
      findRedundantConnection([
        [1, 2],
        [2, 3],
        [3, 4],
        [1, 4],
        [1, 5],
      ]),
    ).toEqual([1, 4]);
  });
});
