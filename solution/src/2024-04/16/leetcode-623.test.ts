import { compareTree, createTree } from '@algorithm/lib';
import { addOneRow } from './leetcode-623';

describe('2024-04-16: LeetCode 623', () => {
  test('Example 1', () => {
    const root = createTree([4, 2, 6]);
    const answer = createTree([4, 1, 1, 2, null, null, 6]);
    expect(compareTree(addOneRow(root, 1, 2), answer)).toBe(true);
  });
  test('Example 2', () => {
    const root = createTree([4, 2, null, 3, 1]);
    const answer = createTree([4, 2, null, 1, 1, null, null, 3, null, null, 1]);
    expect(compareTree(addOneRow(root, 1, 3), answer)).toBe(true);
  });
});
