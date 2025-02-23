import { createLinkedList, linkedListToArr } from '@algorithm/lib';
import { partition } from './0086';

describe('LeetCode 0086', () => {
  test('Example 1', () => {
    const head = createLinkedList([1, 4, 3, 2, 5, 2]);
    expect(linkedListToArr(partition(head, 3))).toEqual([1, 2, 2, 4, 3, 5]);
  });
  test('Example 2', () => {
    const head = createLinkedList([2, 1]);
    expect(linkedListToArr(partition(head, 2))).toEqual([1, 2]);
  });
});
