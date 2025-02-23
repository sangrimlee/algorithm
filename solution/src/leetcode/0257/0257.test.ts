import { createTree } from '@algorithm/lib';
import { binaryTreePaths } from './0257';

describe('LeetCode 0257', () => {
  test('Example 1', () => {
    const root = createTree([1, 2, 3, null, 5]);
    expect(binaryTreePaths(root)).toEqual(['1->2->5', '1->3']);
  });
  test('Example 2', () => {
    const root = createTree([1]);
    expect(binaryTreePaths(root)).toEqual(['1']);
  });
});
