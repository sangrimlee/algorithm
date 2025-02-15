import { ListNode } from '@algorithm/lib';
import { detectCycle } from './leetcode-142';

describe('2024-01-16: LeetCode 142', () => {
  function createCycledLinkedList(arr: number[], pos: number) {
    if (arr.length === 0) {
      return null;
    }
    const listNodes = arr.map((value) => new ListNode(value));
    for (let i = 0; i < arr.length; i++) {
      if (i < arr.length - 1) {
        listNodes[i].next = listNodes[i + 1];
      } else {
        listNodes[i].next = 0 <= pos ? listNodes[pos] : null;
      }
    }
    return listNodes[0];
  }

  test('Example 1', () => {
    const head = createCycledLinkedList([3, 2, 0, -4], 1);
    expect(detectCycle(head)).toEqual(head?.next);
  });
  test('Example 2', () => {
    const head = createCycledLinkedList([1, 2], 0);
    expect(detectCycle(head)).toEqual(head);
  });
  test('Example 3', () => {
    const head = createCycledLinkedList([1, 2], -1);
    expect(detectCycle(head)).toBeNull();
  });
});
