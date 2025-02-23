import { countSubTrees } from './1519';

describe('LeetCode 1519', () => {
  test('Example 1', () => {
    const n = 7,
      edges = [
        [0, 1],
        [0, 2],
        [1, 4],
        [1, 5],
        [2, 3],
        [2, 6],
      ],
      labels = 'abaedcd';
    expect(countSubTrees(n, edges, labels)).toEqual([2, 1, 1, 1, 1, 1, 1]);
  });

  test('Example 2', () => {
    const n = 4,
      edges = [
        [0, 1],
        [1, 2],
        [0, 3],
      ],
      labels = 'bbbb';
    expect(countSubTrees(n, edges, labels)).toEqual([4, 2, 1, 1]);
  });

  test('Example 3', () => {
    const n = 5,
      edges = [
        [0, 1],
        [0, 2],
        [1, 3],
        [0, 4],
      ],
      labels = 'aabab';
    expect(countSubTrees(n, edges, labels)).toEqual([3, 2, 1, 1, 1]);
  });
});
