import { createNArrayTree } from '@algorithm/lib';
import { postorder } from './0590';

describe('LeetCode 0590', () => {
  test('Example 1', () => {
    const root = createNArrayTree({
      1: [3, 2, 4],
      3: [5, 6],
    });
    expect(postorder(root)).toEqual([5, 6, 3, 2, 4, 1]);
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
    expect(postorder(root)).toEqual([2, 6, 14, 11, 7, 3, 12, 8, 4, 13, 9, 10, 5, 1]);
  });
});
