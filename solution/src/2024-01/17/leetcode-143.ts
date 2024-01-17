import { ListNode } from '@algorithm/lib';

/**
 * 143. Reorder List
 * https://leetcode.com/problems/reorder-list
 */
export function reorderList(head: ListNode | null): void {
  if (head === null || head.next === null) {
    return;
  }
  let currentNode: ListNode | null = head;
  const nodes: ListNode[] = [];
  while (currentNode) {
    nodes.push(currentNode);
    currentNode = currentNode.next;
  }

  let [start, end] = [0, nodes.length - 1];
  while (start < end) {
    nodes[start].next = nodes[end];
    nodes[end].next = nodes[start + 1];
    start += 1;
    end -= 1;
  }
  nodes[start].next = null;
}
