import { ListNode } from '@algorithm/lib';

/**
 * 2487. Remove Nodes From Linked List
 * https://leetcode.com/problems/remove-nodes-from-linked-list
 */
export function removeNodes(head: ListNode | null): ListNode | null {
  if (head === null) {
    return head;
  }
  head.next = removeNodes(head.next);
  return head.next && head.val < head.next.val ? head.next : head;
}
