import { compareTree, createLinkedList, createTree } from '@algorithm/lib';
import { sortedListToBST } from './leetcode-109';

describe('2024-01-11: LeetCode 109', () => {
  test('Example 1', () => {
    const head = createLinkedList([-10, -3, 0, 5, 9]);
    const root = createTree([0, -3, 9, -10, null, 5]);
    expect(compareTree(sortedListToBST(head), root)).toBe(true);
  });
  test('Example 2', () => {
    const head = createLinkedList([]);
    const root = createTree([]);
    expect(compareTree(sortedListToBST(head), root)).toBe(true);
  });
});
