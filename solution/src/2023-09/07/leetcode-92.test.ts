import { createLinkedList, linkedListToArr } from '@algorithm/lib';
import { reverseBetween } from './leetcode-92';

describe('2023-09-07: LeetCode 92', () => {
  test('Example 1', () => {
    const head = createLinkedList([1, 2, 3, 4, 5]);
    expect(linkedListToArr(reverseBetween(head, 2, 4))).toEqual([1, 4, 3, 2, 5]);
  });
  test('Example 2', () => {
    const head = createLinkedList([5]);

    expect(linkedListToArr(reverseBetween(head, 1, 1))).toEqual([5]);
  });
});
