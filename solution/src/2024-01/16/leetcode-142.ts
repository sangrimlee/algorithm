import { ListNode } from '@algorithm/lib';

/**
 * 142. Linked List Cycle II
 * https://leetcode.com/problems/linked-list-cycle-ii
 */
export function detectCycle(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;
  while (slow && slow.next && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) break;
  }
  if (!(fast && fast.next)) {
    return null;
  }
  let entry = head;
  while (entry && slow && entry !== slow) {
    entry = entry.next;
    slow = slow.next;
  }
  return entry;
}
