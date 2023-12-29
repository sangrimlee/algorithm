import { compareTree, createTree } from '@algorithm/lib';
import { buildTree } from './leetcode-106';

describe('2023-12-29: LeetCode 106', () => {
  test('Example 1', () => {
    const head = buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]);
    const answer = createTree([3, 9, 20, null, null, 15, 7]);
    expect(compareTree(head, answer)).toBe(true);
  });

  test('Example 2', () => {
    const head = buildTree([-1], [-1]);
    const answer = createTree([-1]);
    expect(compareTree(head, answer)).toBe(true);
  });
});
