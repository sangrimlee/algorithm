import { createLinkedList, linkedListToArr } from '@algorithm/lib';
import { mergeInBetween } from './leetcode-1669';

describe('2024-03-20: LeetCode 1669', () => {
  test('Example 1', () => {
    const list1 = createLinkedList([10, 1, 13, 6, 9, 5]);
    const list2 = createLinkedList([1000000, 1000001, 1000002]);
    const head = mergeInBetween(list1, 3, 4, list2);
    expect(linkedListToArr(head)).toEqual([10, 1, 13, 1000000, 1000001, 1000002, 5]);
  });
  test('Example 2', () => {
    const list1 = createLinkedList([0, 1, 2, 3, 4, 5, 6]);
    const list2 = createLinkedList([1000000, 1000001, 1000002, 1000003, 1000004]);
    const head = mergeInBetween(list1, 2, 5, list2);
    expect(linkedListToArr(head)).toEqual([0, 1, 1000000, 1000001, 1000002, 1000003, 1000004, 6]);
  });
});
