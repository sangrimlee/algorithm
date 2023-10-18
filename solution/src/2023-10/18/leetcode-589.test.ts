import { createNArrayTree } from '@algorithm/lib';
import { preorder } from './leetcode-589';

describe('2023-10-18: LeetCode 589', () => {
  test('Example 1', () => {
    const root = createNArrayTree({
      1: [3, 2, 4],
      3: [5, 6],
    });
    expect(preorder(root)).toEqual([1, 3, 5, 6, 2, 4]);
  });
  test('Example 2', () => {
    const root = createNArrayTree({
      1: [2, 3, 4, 5],
      3: [6, 7],
      4: [8],
      5: [9, 10],
      7: [11],
      8: [12],
      9: [13],
      11: [14],
    });
    expect(preorder(root)).toEqual([1, 2, 3, 6, 7, 11, 14, 4, 8, 12, 5, 9, 13, 10]);
  });
});
