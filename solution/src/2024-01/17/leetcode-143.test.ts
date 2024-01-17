import { createLinkedList, linkedListToArr } from '@algorithm/lib';
import { reorderList } from './leetcode-143';

describe('2024-01-17: LeetCode 143', () => {
  test('Example 1', () => {
    const head = createLinkedList([1, 2, 3, 4]);
    reorderList(head);
    expect(linkedListToArr(head)).toEqual([1, 4, 2, 3]);
  });
  test('Example 2', () => {
    const head = createLinkedList([1, 2, 3, 4, 5]);
    reorderList(head);
    expect(linkedListToArr(head)).toEqual([1, 5, 2, 4, 3]);
  });
});
