import type { ListNode } from '@algorithm/lib';

/**
 * 1290. Convert Binary Number in a Linked List to Integer
 * https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer
 */
export function getDecimalValue(head: ListNode | null): number {
  let answer = 0;
  let currentNode = head;
  while (currentNode) {
    answer <<= 1;
    answer += currentNode.val;
    currentNode = currentNode.next;
  }
  return answer;
}
