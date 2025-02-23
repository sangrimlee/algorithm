import type { ListNode } from '@algorithm/lib';

/**
 * 61. Rotate List
 * https://leetcode.com/problems/rotate-list
 */
export function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (head === null) {
    return null;
  }
  let lastNode = head;
  let totalLength = 1;
  while (lastNode.next !== null) {
    lastNode = lastNode.next;
    totalLength += 1;
  }
  lastNode.next = head;

  let currentNode = head;
  let currentIndex = 0;
  const lastNodeIndex = totalLength - (k % totalLength) - 1;
  while (currentNode.next !== null && currentIndex < lastNodeIndex) {
    currentNode = currentNode.next;
    currentIndex += 1;
  }
  const firstNode = currentNode.next;
  currentNode.next = null;
  return firstNode;
}
