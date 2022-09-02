import { isPalindrome, ListNode } from './leetcode-234';

function createLinkedListFromArr(arr: number[]): ListNode | null {
  const startNode = new ListNode();
  let currentNode = startNode;
  arr.forEach((value) => {
    currentNode.next = new ListNode(value);
    currentNode = currentNode.next;
  });
  return startNode.next;
}

describe('2022-09-02: LeetCode 234', () => {
  test('Example 1', () => {
    const head = createLinkedListFromArr([1, 2, 2, 1]);

    expect(isPalindrome(head)).toBeTruthy();
  });

  test('Example 2', () => {
    const head = createLinkedListFromArr([1, 2]);

    expect(isPalindrome(head)).toBeFalsy();
  });
});
