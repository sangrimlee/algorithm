import { createLinkedList, linkedListToArr } from '@algorithm/lib';
import { rotateRight } from './leetcode-61';

describe('2023-12-13: LeetCode 61', () => {
  test('Example 1', () => {
    const head = createLinkedList([1, 2, 3, 4, 5]);
    expect(linkedListToArr(rotateRight(head, 2))).toEqual([4, 5, 1, 2, 3]);
  });
  test('Example 2', () => {
    const head = createLinkedList([0, 1, 2]);
    expect(linkedListToArr(rotateRight(head, 4))).toEqual([2, 0, 1]);
  });
});
