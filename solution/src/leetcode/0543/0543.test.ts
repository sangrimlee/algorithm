import { createTree } from '@algorithm/lib';
import { diameterOfBinaryTree } from './0543';

describe('LeetCode 0543', () => {
  test('Example 1', () => {
    expect(diameterOfBinaryTree(createTree([1, 2, 3, 4, 5]))).toBe(3);
  });
  test('Example 2', () => {
    expect(diameterOfBinaryTree(createTree([1, 2]))).toBe(1);
  });
});
