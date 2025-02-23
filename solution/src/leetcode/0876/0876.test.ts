import { createLinkedList } from '@algorithm/lib';

import { middleNode } from './0876';

describe('LeetCode 0876', () => {
  test('Example 1', () => {
    const arr = [1, 2, 3, 4, 5];
    const head = createLinkedList(arr);
    expect(middleNode(head)?.val).toBe(3);
  });

  test('Example 2', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const head = createLinkedList(arr);
    expect(middleNode(head)?.val).toBe(4);
  });
});
