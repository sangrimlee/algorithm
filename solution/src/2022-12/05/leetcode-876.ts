import { ListNode } from '@algorithm/lib';

/**
 * 876. Middle of the Linked List
 * https://leetcode.com/problems/middle-of-the-linked-list/
 */
export function middleNode(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }

  if (head.next === null) {
    return head;
  }

  let [left, right]: Array<ListNode | null> = [head, head];
  while (right && right.next) {
    right = right?.next?.next ?? null;
    left = left?.next ?? null;
  }

  return left;
}
