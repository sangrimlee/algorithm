import { createNArrayTree } from '@1d1s/lib';
import { levelOrder } from './leetcode-429';

describe('2022-09-05: LeetCode 429', () => {
  test('Example 1', () => {
    const example = {
      1: [3, 2, 4],
      3: [5, 6],
    };

    const root = createNArrayTree(example);
    expect(levelOrder(root)).toEqual([[1], [3, 2, 4], [5, 6]]);
  });

  test('Example 2', () => {
    const example = {
      1: [2, 3, 4, 5],
      3: [6, 7],
      4: [8],
      5: [9, 10],
      7: [11],
      8: [12],
      9: [13],
      11: [14],
    };

    const root = createNArrayTree(example);
    expect(levelOrder(root)).toEqual([[1], [2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13], [14]]);
  });
});
