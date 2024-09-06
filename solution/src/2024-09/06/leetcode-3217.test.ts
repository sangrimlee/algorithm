import { createLinkedList, linkedListToArr } from '@algorithm/lib';
import { modifiedList } from './leetcode-3217';

describe('2024-09-06: LeetCode 3217', () => {
  test('Example 1', () => {
    expect(linkedListToArr(modifiedList([1, 2, 3], createLinkedList([1, 2, 3, 4, 5])))).toEqual([
      4, 5,
    ]);
  });
  test('Example 2', () => {
    expect(linkedListToArr(modifiedList([1], createLinkedList([1, 2, 1, 2, 1, 2])))).toEqual([
      2, 2, 2,
    ]);
  });
  test('Example 3', () => {
    expect(linkedListToArr(modifiedList([5], createLinkedList([1, 2, 3, 4])))).toEqual([
      1, 2, 3, 4,
    ]);
  });
});
