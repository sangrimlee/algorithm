import { createLinkedList, linkedListToArr } from '@algorithm/lib';
import { insertionSortList } from './0147';

describe('LeetCode 0147', () => {
  test('Example 1', () => {
    const head = createLinkedList([4, 2, 1, 3]);
    expect(linkedListToArr(insertionSortList(head))).toEqual([1, 2, 3, 4]);
  });
  test('Example 2', () => {
    const head = createLinkedList([-1, 5, 3, 4, 0]);
    expect(linkedListToArr(insertionSortList(head))).toEqual([-1, 0, 3, 4, 5]);
  });
});
