import { ListNode } from '@algorithm/lib';

/**
 * 24. Swap Nodes in Pairs
 * https://leetcode.com/problems/swap-nodes-in-pairs
 */
export function swapPairs(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head;
  }
  function swap(node: ListNode | null): ListNode | null {
    if (node === null || node.next === null) {
      return node;
    }
    const nextNode = node.next;
    node.next = swap(node.next.next);
    nextNode.next = node;
    return nextNode;
  }
  return swap(head);
}
