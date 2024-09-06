import { ListNode } from '@algorithm/lib';

/**
 * 3217. Delete Nodes From Linked List Present in Array
 * https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array
 */
export function modifiedList(nums: number[], head: ListNode | null): ListNode | null {
  const set = new Set(nums);
  const startNode = new ListNode(-1);

  let prevNode = startNode;
  let currentNode = head;
  while (currentNode !== null) {
    if (!set.has(currentNode.val)) {
      prevNode.next = currentNode;
      prevNode = prevNode.next;
    }
    currentNode = currentNode.next;
  }
  prevNode.next = null;
  return startNode.next;
}
