import type { ListNode } from '@algorithm/lib';

/**
 * 141. Linked List Cycle
 * https://leetcode.com/problems/linked-list-cycle
 */
export function hasCycle(head: ListNode | null): boolean {
  if (head === null) {
    return false;
  }

  let slow: ListNode | null = head;
  let fast: ListNode | null = head.next;

  while (slow && fast) {
    if (slow === fast) {
      return true;
    }
    slow = slow.next;
    fast = fast.next ? fast.next.next : null;
  }
  return false;
}
