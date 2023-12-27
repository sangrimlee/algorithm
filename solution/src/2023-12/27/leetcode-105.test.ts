import { compareTree, createTree } from '@algorithm/lib';
import { buildTree } from './leetcode-105';

describe('2023-12-27: LeetCode 105', () => {
  test('Example 1', () => {
    const head = buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
    const answer = createTree([3, 9, 20, null, null, 15, 7]);
    expect(compareTree(head, answer)).toBe(true);
  });
  test('Example 2', () => {
    const head = buildTree([-1], [-1]);
    const answer = createTree([-1]);
    expect(compareTree(head, answer)).toBe(true);
  });
});
