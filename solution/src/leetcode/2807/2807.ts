import { ListNode } from '@algorithm/lib';

/**
 * 2807. Insert Greatest Common Divisors in Linked List
 * https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list
 */
export function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }

  function gcd(a: number, b: number): number {
    if (b === 0) return a;
    return gcd(b, a % b);
  }

  let currentNode = head;
  while (currentNode.next !== null) {
    const nextNode = currentNode.next;
    currentNode.next = new ListNode(gcd(currentNode.val, nextNode.val), nextNode);
    currentNode = nextNode;
  }
  return head;
}
