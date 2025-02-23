import { createLinkedList, linkedListToArr } from '@algorithm/lib';
import { splitListToParts } from './0725';

describe('LeetCode 0725', () => {
  test('Example 1', () => {
    const head = createLinkedList([1, 2, 3]);
    expect(splitListToParts(head, 5).map(linkedListToArr)).toEqual([[1], [2], [3], [], []]);
  });
  test('Example 2', () => {
    const head = createLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(splitListToParts(head, 3).map(linkedListToArr)).toEqual([
      [1, 2, 3, 4],
      [5, 6, 7],
      [8, 9, 10],
    ]);
  });
});
