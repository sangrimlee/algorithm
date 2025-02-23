import { ListNode } from '@algorithm/lib';

/**
 * 2816. Double a Number Represented as a Linked List
 * https://leetcode.com/problems/double-a-number-represented-as-a-linked-list
 */
export function doubleIt(head: ListNode | null): ListNode | null {
  if (!head) {
    return head;
  }

  const newHead = head.val > 4 ? new ListNode(0, head) : head;
  let currentNode: ListNode | null = newHead;
  while (currentNode) {
    currentNode.val = (currentNode.val * 2) % 10;
    if (currentNode.next && currentNode.next.val > 4) {
      currentNode.val += 1;
    }
    currentNode = currentNode.next;
  }

  return newHead;
}
