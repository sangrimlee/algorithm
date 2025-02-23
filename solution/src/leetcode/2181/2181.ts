import type { ListNode } from '@algorithm/lib';

/**
 * 2181. Merge Nodes in Between Zeros
 * https://leetcode.com/problems/merge-nodes-in-between-zeros
 */
export function mergeNodes(head: ListNode | null): ListNode | null {
  if (head === null) {
    return head;
  }

  let left = head;
  let right = head.next;
  let sum = 0;
  while (left.next !== null && right !== null) {
    if (right.val === 0) {
      left = left.next;
      left.val = sum;
      sum = 0;
    } else {
      sum += right.val;
    }
    right = right.next;
  }
  left.next = null;
  return head.next;
}
