import { sumOfDistancesInTree } from './0834';

describe('LeetCode 0834', () => {
  test('Example 1', () => {
    const n = 6;
    const edges = [
      [0, 1],
      [0, 2],
      [2, 3],
      [2, 4],
      [2, 5],
    ];
    expect(sumOfDistancesInTree(n, edges)).toEqual([8, 12, 6, 10, 10, 10]);
  });

  test('Example 2', () => {
    const n = 1;
    const edges: number[][] = [];
    expect(sumOfDistancesInTree(n, edges)).toEqual([0]);
  });

  test('Example 3', () => {
    const n = 2;
    const edges = [[1, 0]];
    expect(sumOfDistancesInTree(n, edges)).toEqual([1, 1]);
  });
});
