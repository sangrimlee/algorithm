import { ListNode } from '@algorithm/lib';

/**
 * 2058. Find the Minimum and Maximum Number of Nodes Between Critical Points
 * https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points
 */
export function nodesBetweenCriticalPoints(head: ListNode | null): number[] {
  if (head === null) {
    return [-1, -1];
  }
  let [start, end] = [Number.MAX_SAFE_INTEGER, 0];
  let minDistance = Number.MAX_SAFE_INTEGER;
  let prevNode: ListNode | null = null;
  let currentNode: ListNode | null = head;
  let currentIndex = 0;
  while (currentNode !== null) {
    if (isCriticalPoint(prevNode, currentNode)) {
      if (end !== 0) {
        minDistance = Math.min(minDistance, currentIndex - end);
      }
      start = Math.min(start, currentIndex);
      end = currentIndex;
    }
    prevNode = currentNode;
    currentNode = currentNode.next;
    currentIndex += 1;
  }

  if (minDistance === Number.MAX_SAFE_INTEGER) {
    return [-1, -1];
  }
  return [minDistance, end - start];
}

function isCriticalPoint(prevNode: ListNode | null, currentNode: ListNode | null) {
  if (!prevNode || !currentNode || !currentNode.next) {
    return false;
  }
  return (
    Math.max(prevNode.val, currentNode.next.val) < currentNode.val ||
    Math.min(prevNode.val, currentNode.next.val) > currentNode.val
  );
}
