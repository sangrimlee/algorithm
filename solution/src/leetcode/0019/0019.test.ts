import { removeNthFromEnd } from './0019';
import { createLinkedList, linkedListToArr } from '@algorithm/lib';

describe('LeetCode 0019', () => {
  test('Example 1', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(linkedListToArr(removeNthFromEnd(createLinkedList(arr), 2))).toEqual([1, 2, 3, 5]);
  });

  test('Example 2', () => {
    const arr = [1];
    expect(linkedListToArr(removeNthFromEnd(createLinkedList(arr), 1))).toEqual([]);
  });

  test('Example 3', () => {
    const arr = [1, 2];
    expect(linkedListToArr(removeNthFromEnd(createLinkedList(arr), 1))).toEqual([1]);
  });
});
