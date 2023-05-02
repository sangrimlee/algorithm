import { countNodes } from './leetcode-222';
import { createTree } from '@algorithm/lib';

describe('2022-11-15: Leetcode 222', () => {
  test('Example 1', () => {
    const tree = [1, 2, 3, 4, 5, 6];
    expect(countNodes(createTree(tree))).toBe(tree.length);
  });

  test('Example 2', () => {
    const tree: number[] = [];
    expect(countNodes(createTree(tree))).toBe(tree.length);
  });

  test('Example 3', () => {
    const tree = [1];
    expect(countNodes(createTree(tree))).toBe(tree.length);
  });
});
