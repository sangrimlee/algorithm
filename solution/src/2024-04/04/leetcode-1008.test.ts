import { compareTree, createTree } from '@algorithm/lib';
import { bstFromPreorder } from './leetcode-1008';

describe('2024-04-04: LeetCode 1008', () => {
  test('Example 1', () => {
    const root = bstFromPreorder([8, 5, 1, 7, 10, 12]);
    const answer = createTree([8, 5, 10, 1, 7, null, 12]);
    expect(compareTree(root, answer)).toBe(true);
  });
  test('Example 2', () => {
    const root = bstFromPreorder([1, 3]);
    const answer = createTree([1, null, 3]);
    expect(compareTree(root, answer)).toBe(true);
  });
});
