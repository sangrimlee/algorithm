import { createNArrayTree } from '@algorithm/lib';
import { maxDepth } from './leetcode-559';

describe('2023-10-15: LeetCode 559', () => {
  test('Example 1', () => {
    const root = createNArrayTree({
      1: [2, 3, 4],
      3: [5, 6],
    });
    expect(maxDepth(root)).toBe(3);
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
    expect(maxDepth(root)).toBe(5);
  });
});
