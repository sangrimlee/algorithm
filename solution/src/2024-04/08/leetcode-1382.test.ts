import { compareTree, createTree } from '@algorithm/lib';
import { balanceBST } from './leetcode-1382';

describe('2024-04-08: LeetCode 1382', () => {
  test('Example 1', () => {
    const root = createTree([1, null, 2, null, 3, null, 4, null, null]);
    expect(compareTree(balanceBST(root), createTree([2, 1, 3, null, null, null, 4]))).toBe(true);
  });
  test('Example 2', () => {
    const root = createTree([2, 1, 3]);
    expect(compareTree(balanceBST(root), createTree([2, 1, 3]))).toBe(true);
  });
});
