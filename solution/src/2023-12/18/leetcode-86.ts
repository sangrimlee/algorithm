import { ListNode } from '@algorithm/lib';

/**
 * 86. Partition List
 * https://leetcode.com/problems/partition-list
 */
export function partition(head: ListNode | null, x: number): ListNode | null {
  const leftHead = new ListNode(-1);
  const rightHead = new ListNode(-1);
  let leftNode = leftHead;
  let rightNode = rightHead;
  let currentNode = head;
  while (currentNode !== null) {
    if (currentNode.val < x) {
      leftNode.next = currentNode;
      leftNode = leftNode.next;
    } else {
      rightNode.next = currentNode;
      rightNode = rightNode.next;
    }
    currentNode = currentNode.next;
  }
  leftNode.next = rightHead.next;
  rightNode.next = null;
  return leftHead.next;
}
