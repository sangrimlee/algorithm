import { ListNode } from '@algorithm/lib';

/**
 * 1669. Merge In Between Linked Lists
 * https://leetcode.com/problems/merge-in-between-linked-lists
 */
export function mergeInBetween(
  list1: ListNode | null,
  a: number,
  b: number,
  list2: ListNode | null,
): ListNode | null {
  if (list1 === null || list2 === null) {
    return null;
  }

  let i = 0;
  let startNode = new ListNode();
  let endNode = list1;
  while (endNode.next !== null && i < b) {
    if (i === a - 1) {
      startNode = endNode;
    }
    endNode = endNode.next;
    i += 1;
  }
  startNode.next = list2;

  let currentNode = list2;
  while (currentNode.next !== null) {
    currentNode = currentNode.next;
  }
  currentNode.next = endNode.next;

  return list1;
}
