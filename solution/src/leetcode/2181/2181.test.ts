import { createLinkedList, linkedListToArr } from '@algorithm/lib';
import { mergeNodes } from './2181';

describe('LeetCode 2181', () => {
  test('Example 1', () => {
    const head = createLinkedList([0, 3, 1, 0, 4, 5, 2, 0]);
    expect(linkedListToArr(mergeNodes(head))).toEqual([4, 11]);
  });
  test('Example 2', () => {
    const head = createLinkedList([0, 1, 0, 3, 0, 2, 2, 0]);
    expect(linkedListToArr(mergeNodes(head))).toEqual([1, 3, 4]);
  });
});
