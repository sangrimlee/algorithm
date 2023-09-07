import { ListNode } from '@algorithm/lib';

/**
 * 92. Reverse Linked List II
 * https://leetcode.com/problems/reverse-linked-list-ii
 */
export function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number,
): ListNode | null {
  if (head === null || left === right) {
    return head;
  }

  const reversed = new ListNode(0, head);
  let prevNode = reversed;
  for (let i = 0; i < left - 1; i++) {
    if (prevNode.next) {
      prevNode = prevNode.next;
    }
  }

  const currentNode = prevNode.next;
  for (let i = 0; i < right - left; i++) {
    if (currentNode && currentNode.next) {
      const nextNode = currentNode.next;
      currentNode.next = nextNode.next;
      nextNode.next = prevNode.next;
      prevNode.next = nextNode;
    }
  }

  return reversed.next;
}
