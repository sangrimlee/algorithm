import { createTree } from '@algorithm/lib';
import { diameterOfBinaryTree } from './leetcode-543';

describe('2023-10-15: LeetCode 543', () => {
  test('Example 1', () => {
    expect(diameterOfBinaryTree(createTree([1, 2, 3, 4, 5]))).toBe(3);
  });
  test('Example 2', () => {
    expect(diameterOfBinaryTree(createTree([1, 2]))).toBe(1);
  });
});
