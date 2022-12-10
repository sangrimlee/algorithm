import { createLinkedList } from '@1d1s/lib';

import { middleNode } from './leetcode-876';

describe('2022-12-05: Leetcode 876', () => {
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
