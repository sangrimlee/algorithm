import { compareTree, createTree } from '@algorithm/lib';
import { constructFromPrePost } from './0889';

describe('LeetCode 0889', () => {
  test('Example 1', () => {
    const root = createTree([1, 2, 3, 4, 5, 6, 7]);
    const answer = constructFromPrePost([1, 2, 4, 5, 3, 6, 7], [4, 5, 2, 6, 7, 3, 1]);
    expect(compareTree(root, answer)).toBe(true);
  });
  test('Example 2', () => {
    const root = createTree([1]);
    const answer = constructFromPrePost([1], [1]);
    expect(compareTree(root, answer)).toBe(true);
  });
});
