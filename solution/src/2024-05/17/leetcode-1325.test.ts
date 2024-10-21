import { compareTree, createTree } from '@algorithm/lib';
import { removeLeafNodes } from './leetcode-1325';

describe('2024-05-17: LeetCode 1325', () => {
  test('Example 1', () => {
    const root = createTree([1, 2, 3, 2, null, 2, 4]);
    const answer = createTree([1, null, 3, null, 4]);
    expect(compareTree(removeLeafNodes(root, 2), answer)).toBe(true);
  });
  test('Example 2', () => {
    const root = createTree([1, 3, 3, 3, 2]);
    const answer = createTree([1, 3, null, null, 2]);
    expect(compareTree(removeLeafNodes(root, 3), answer)).toBe(true);
  });
  test('Example 3', () => {
    const root = createTree([1, 2, null, 2, null, 2]);
    const answer = createTree([1]);
    expect(compareTree(removeLeafNodes(root, 2), answer)).toBe(true);
  });
});
