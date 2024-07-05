import { createLinkedList } from '@algorithm/lib';
import { nodesBetweenCriticalPoints } from './leetcode-2058';

describe('2024-07-05: LeetCode 2058', () => {
  test('Example 1', () => {
    expect(nodesBetweenCriticalPoints(createLinkedList([3, 1]))).toEqual([-1, -1]);
  });
  test('Example 2', () => {
    expect(nodesBetweenCriticalPoints(createLinkedList([5, 3, 1, 2, 5, 1, 2]))).toEqual([1, 3]);
  });
  test('Example 3', () => {
    expect(nodesBetweenCriticalPoints(createLinkedList([1, 3, 2, 2, 3, 2, 2, 2, 7]))).toEqual([
      3, 3,
    ]);
  });
});
