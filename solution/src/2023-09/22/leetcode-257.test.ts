import { createTree } from '@algorithm/lib';
import { binaryTreePaths } from './leetcode-257';

describe('2023-09-22: LeetCode 257', () => {
  test('Example 1', () => {
    const root = createTree([1, 2, 3, null, 5]);
    expect(binaryTreePaths(root)).toEqual(['1->2->5', '1->3']);
  });
  test('Example 2', () => {
    const root = createTree([1]);
    expect(binaryTreePaths(root)).toEqual(['1']);
  });
});
