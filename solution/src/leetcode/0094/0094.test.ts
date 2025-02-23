import { createTree } from '@algorithm/lib';
import { inorderTraversal } from './0094';

describe('LeetCode 0094', () => {
  test('Example 1', () => {
    const root = createTree([1, 2, 3, 4, null, 5]);
    expect(inorderTraversal(root)).toEqual([4, 2, 1, 5, 3]);
  });

  test('Example 2', () => {
    const root = createTree([]);

    expect(inorderTraversal(root)).toEqual([]);
  });

  test('Example 3', () => {
    const root = createTree([1]);

    expect(inorderTraversal(root)).toEqual([1]);
  });
});
