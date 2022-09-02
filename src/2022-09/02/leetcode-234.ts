export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function convertLinkedListToArray(head: ListNode | null) {
  const result: number[] = [];
  let currentNode = head;
  while (currentNode !== null) {
    result.push(currentNode.val);
    currentNode = currentNode.next;
  }
  return result;
}

/**
 * 234. Palindrome Linked List
 * https://leetcode.com/problems/palindrome-linked-list/
 */
export function isPalindrome(head: ListNode | null): boolean {
  const arr = convertLinkedListToArray(head);
  let [start, end] = [0, arr.length - 1];
  while (start < end) {
    if (arr[start] !== arr[end]) {
      return false;
    }
    start += 1;
    end -= 1;
  }
  return true;
}
