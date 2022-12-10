import { ListNode } from '@1d1s/lib';

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

function convertLinkedListToArray(head: ListNode | null) {
  const result: number[] = [];
  let currentNode = head;
  while (currentNode !== null) {
    result.push(currentNode.val);
    currentNode = currentNode.next;
  }
  return result;
}
