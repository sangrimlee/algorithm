import { outerTrees } from './leetcode-587';

describe('2022-11-19: Leetcode 587', () => {
  test('Example 1', () => {
    const points = [
      [1, 1],
      [2, 2],
      [2, 0],
      [2, 4],
      [3, 3],
      [4, 2],
    ];
    const answer = [
      [1, 1],
      [2, 0],
      [3, 3],
      [2, 4],
      [4, 2],
    ].sort();
    expect(outerTrees(points).sort()).toEqual(answer);
  });

  test('Example 2', () => {
    const points = [
      [1, 2],
      [2, 2],
      [4, 2],
    ];
    const answer = [
      [1, 2],
      [2, 2],
      [4, 2],
    ].sort();
    expect(outerTrees(points).sort()).toEqual(answer);
  });
});
