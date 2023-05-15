import { createLinkedList, linkedListToArr } from '@algorithm/lib';
import { swapNodes } from './leetcode-1721';

describe('2023-05-15: LeetCode 1721', () => {
  test('Example 1', () => {
    const head = createLinkedList([1, 2, 3, 4, 5]);

    expect(linkedListToArr(swapNodes(head, 2))).toEqual([1, 4, 3, 2, 5]);
  });

  test('Example 2', () => {
    const head = createLinkedList([7, 9, 6, 6, 7, 8, 3, 0, 9, 5]);

    expect(linkedListToArr(swapNodes(head, 5))).toEqual([7, 9, 6, 6, 8, 7, 3, 0, 9, 5]);
  });
});
