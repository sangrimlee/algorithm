import { createLinkedList, linkedListToArr } from '@algorithm/lib';
import { removeNodes } from './leetcode-2487';

describe('2024-05-06: LeetCode 2487', () => {
  test('Example 1', () => {
    const answer = removeNodes(createLinkedList([5, 2, 13, 3, 8]));
    expect(linkedListToArr(answer)).toEqual([13, 8]);
  });
  test('Example 2', () => {
    const answer = removeNodes(createLinkedList([1, 1, 1, 1]));
    expect(linkedListToArr(answer)).toEqual([1, 1, 1, 1]);
  });
});
