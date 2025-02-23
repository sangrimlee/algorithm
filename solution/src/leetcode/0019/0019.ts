import type { ListNode } from '@algorithm/lib';

/**
 * 19. Remove Nth Node From End of List
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 */
export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (head === null) {
    return null;
  }
  let lastNode: ListNode | null = head;
  let prevNode: ListNode | null = head;

  for (let i = 0; i < n; i++) {
    if (lastNode) {
      lastNode = lastNode.next;
    }
  }

  if (!lastNode) {
    return head.next;
  }

  while (lastNode.next !== null) {
    lastNode = lastNode.next;
    if (prevNode) prevNode = prevNode.next;
  }

  if (prevNode?.next) {
    prevNode.next = prevNode.next.next;
  }

  return head;
}
