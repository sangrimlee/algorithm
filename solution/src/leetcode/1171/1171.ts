import { ListNode } from '@algorithm/lib';

/**
 * 1171. Remove Zero Sum Consecutive Nodes from Linked List
 * https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list
 */
export function removeZeroSumSublists(head: ListNode | null): ListNode | null {
  const newHead = new ListNode(0, head);

  let prefix = 0;
  let currentNode = head;
  const visited = new Map<number, ListNode>([[0, newHead]]);
  while (currentNode !== null) {
    prefix += currentNode.val;
    visited.set(prefix, currentNode);
    currentNode = currentNode.next;
  }

  prefix = 0;
  currentNode = newHead;
  while (currentNode !== null) {
    prefix += currentNode.val;
    const visitedNode = visited.get(prefix);
    if (!visitedNode) break;
    currentNode.next = visitedNode.next;
    currentNode = currentNode.next;
  }
  return newHead.next;
}
