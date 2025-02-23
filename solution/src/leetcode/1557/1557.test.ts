import { findSmallestSetOfVertices } from './1557';

describe('LeetCode 1557', () => {
  test('Example 1', () => {
    expect(
      findSmallestSetOfVertices(6, [
        [0, 1],
        [0, 2],
        [2, 5],
        [3, 4],
        [4, 2],
      ]),
    ).toEqual([0, 3]);
  });
  test('Example 2', () => {
    expect(
      findSmallestSetOfVertices(5, [
        [0, 1],
        [2, 1],
        [3, 1],
        [1, 4],
        [2, 4],
      ]),
    ).toEqual([0, 2, 3]);
  });
});
