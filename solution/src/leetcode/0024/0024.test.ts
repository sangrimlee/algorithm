import { createLinkedList, linkedListToArr } from '@algorithm/lib';
import { swapPairs } from './0024';

describe('LeetCode 0024', () => {
  test('Example 1', () => {
    const head = createLinkedList([1, 2, 3, 4]);
    expect(linkedListToArr(swapPairs(head))).toEqual([2, 1, 4, 3]);
  });
  test('Example 2', () => {
    const head = createLinkedList([]);
    expect(linkedListToArr(swapPairs(head))).toEqual([]);
  });
  test('Example 3', () => {
    const head = createLinkedList([1]);
    expect(linkedListToArr(swapPairs(head))).toEqual([1]);
  });
});
