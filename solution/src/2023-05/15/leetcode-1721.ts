import { ListNode } from '@algorithm/lib';

/**
 * 1721. Swapping Nodes in a Linked List
 * https://leetcode.com/problems/swapping-nodes-in-a-linked-list
 */
export function swapNodes(head: ListNode | null, k: number): ListNode | null {
  const findNode = (node: ListNode | null, k: number): ListNode | null => {
    let currentNode = node;
    for (let i = 1; i < k; i++) {
      if (currentNode === null) {
        return null;
      }
      currentNode = currentNode.next;
    }
    return currentNode;
  };

  const kthNode = findNode(head, k);

  if (head === null || kthNode === null) {
    return null;
  }

  let [startNode, endNode] = [head, kthNode];

  while (startNode.next !== null && endNode.next !== null) {
    startNode = startNode?.next;
    endNode = endNode.next;
  }

  [startNode.val, kthNode.val] = [kthNode.val, startNode.val];

  return head;
}
