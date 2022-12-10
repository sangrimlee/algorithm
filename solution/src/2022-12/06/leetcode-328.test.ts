import { createLinkedList, linkedListToArr } from '@1d1s/lib';
import { oddEvenList } from './leetcode-328';

describe('2022-12-06: Leetcode 328', () => {
  test('Example 1', () => {
    const head = createLinkedList([1, 2, 3, 4, 5]);
    expect(linkedListToArr(oddEvenList(head))).toEqual([1, 3, 5, 2, 4]);
  });

  test('Example 2', () => {
    const head = createLinkedList([2, 1, 3, 5, 6, 4, 7]);

    expect(linkedListToArr(oddEvenList(head))).toEqual([2, 3, 6, 7, 1, 5, 4]);
  });
});
