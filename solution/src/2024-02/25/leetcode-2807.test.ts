import { createLinkedList, linkedListToArr } from '@algorithm/lib';
import { insertGreatestCommonDivisors } from './leetcode-2807';

describe('2024-02-25: LeetCode 2807', () => {
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
