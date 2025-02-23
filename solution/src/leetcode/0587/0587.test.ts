import { outerTrees } from './0587';

describe('LeetCode 0587', () => {
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
