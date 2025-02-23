import type { ListNode } from '@algorithm/lib';

/**
 * 2130. Maximum Twin Sum of a Linked List
 * https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list
 */
export function pairSum(head: ListNode | null): number {
  const convert = (head: ListNode | null) => {
    const arr: number[] = [];
    let currentNode = head;
    while (currentNode !== null) {
      arr.push(currentNode.val);
      currentNode = currentNode.next;
    }
    return arr;
  };

  const arr = convert(head);
  const n = arr.length;
  let answer = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length / 2; i++) {
    answer = Math.max(answer, arr[i] + arr[n - 1 - i]);
  }

  return answer;
}
