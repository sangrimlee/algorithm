import { createLinkedList, linkedListToArr } from '@algorithm/lib';
import { removeZeroSumSublists } from './leetcode-1171';

describe('2024-03-12: LeetCode 1171', () => {
  test('Example 1', () => {
    const head = createLinkedList([1, 2, -3, 3, 1]);
    expect(linkedListToArr(removeZeroSumSublists(head))).toEqual([3, 1]);
  });

  test('Example 2', () => {
    const head = createLinkedList([1, 2, 3, -3, 4]);
    expect(linkedListToArr(removeZeroSumSublists(head))).toEqual([1, 2, 4]);
  });

  test('Example 3', () => {
    const head = createLinkedList([1, 2, 3, -3, -2]);
    expect(linkedListToArr(removeZeroSumSublists(head))).toEqual([1]);
  });
});
