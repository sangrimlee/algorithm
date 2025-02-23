import { compareTree, createLinkedList, createTree } from '@algorithm/lib';
import { sortedListToBST } from './0109';

describe('LeetCode 0109', () => {
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
