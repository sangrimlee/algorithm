import { ListNode } from '@algorithm/lib';

/**
 * 147. Insertion Sort List
 * https://leetcode.com/problems/insertion-sort-list
 */
export function insertionSortList(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }

  const startNode = new ListNode(-1);
  let prevNode = startNode;
  let currNode: ListNode | null = head;
  let nextNode = currNode.next;

  while (currNode !== null) {
    nextNode = currNode.next;
    while (prevNode.next !== null && prevNode.next.val < currNode.val) {
      prevNode = prevNode.next;
    }
    currNode.next = prevNode.next;
    prevNode.next = currNode;
    prevNode = startNode;
    currNode = nextNode;
  }

  return startNode.next;
}
