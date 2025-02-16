import { createLinkedList, linkedListToArr } from '@algorithm/lib';
import { addTwoNumbers } from './leetcode-445';

describe('2023-07-17: LeetCode 445', () => {
  test('Example 1', () => {
    const l1 = createLinkedList([7, 2, 4, 3]);
    const l2 = createLinkedList([5, 6, 4]);
    expect(linkedListToArr(addTwoNumbers(l1, l2))).toEqual([7, 8, 0, 7]);
  });
  test('Example 2', () => {
    const l1 = createLinkedList([2, 4, 3]);
    const l2 = createLinkedList([5, 6, 4]);
    expect(linkedListToArr(addTwoNumbers(l1, l2))).toEqual([8, 0, 7]);
  });
  test('Example 3', () => {
    const l1 = createLinkedList([0]);
    const l2 = createLinkedList([0]);
    expect(linkedListToArr(addTwoNumbers(l1, l2))).toEqual([0]);
  });

  test('Example 4', () => {
    const l1 = createLinkedList([5]);
    const l2 = createLinkedList([5]);
    expect(linkedListToArr(addTwoNumbers(l1, l2))).toEqual([1, 0]);
  });
});
