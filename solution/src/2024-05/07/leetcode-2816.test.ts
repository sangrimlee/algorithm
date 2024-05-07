import { createLinkedList, linkedListToArr } from '@algorithm/lib';
import { doubleIt } from './leetcode-2816';

describe('2024-05-07: LeetCode 2816', () => {
  test('Example 1', () => {
    const head = createLinkedList([1, 8, 9]);
    const answer = doubleIt(head);
    expect(linkedListToArr(answer)).toEqual([3, 7, 8]);
  });
  test('Example 2', () => {
    const head = createLinkedList([9, 9, 9]);
    const answer = doubleIt(head);
    expect(linkedListToArr(answer)).toEqual([1, 9, 9, 8]);
  });
});
