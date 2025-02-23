import { createLinkedList, linkedListToArr } from '@algorithm/lib';
import { insertGreatestCommonDivisors } from './2807';

describe('LeetCode 2807', () => {
  test('Example 1', () => {
    const head = createLinkedList([18, 6, 10, 3]);
    insertGreatestCommonDivisors(head);
    expect(linkedListToArr(head)).toEqual([18, 6, 6, 2, 10, 1, 3]);
  });
  test('Example 2', () => {
    const head = createLinkedList([7]);
    insertGreatestCommonDivisors(head);
    expect(linkedListToArr(head)).toEqual([7]);
  });
});
