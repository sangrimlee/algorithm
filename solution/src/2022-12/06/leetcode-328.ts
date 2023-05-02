import { ListNode } from '@algorithm/lib';

/**
 * 328. Odd Even Linked List
 * https://leetcode.com/problems/odd-even-linked-list/description/
 */
export function oddEvenList(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }

  const [oddHead, evenHead] = [head, head.next];
  let [oddNode, evenNode] = [oddHead, evenHead];

  while (evenNode !== null && evenNode.next !== null) {
    oddNode.next = evenNode.next;
    oddNode = oddNode.next;
    evenNode.next = oddNode.next;
    evenNode = evenNode.next;
  }
  oddNode.next = evenHead;

  return oddHead;
}
