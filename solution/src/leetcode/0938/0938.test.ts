import { createTree } from '@algorithm/lib';
import { rangeSumBST } from './0938';

describe('LeetCode 0938', () => {
  test('Example 1', () => {
    const root = createTree([10, 5, 15, 3, 7, null, 18]);
    const [low, high] = [7, 15];
    expect(rangeSumBST(root, low, high)).toBe(32);
  });

  test('Example 2', () => {
    const root = createTree([10, 5, 15, 3, 7, 13, 18, 1, null, 6]);
    const [low, high] = [6, 10];
    expect(rangeSumBST(root, low, high)).toBe(23);
  });
});
