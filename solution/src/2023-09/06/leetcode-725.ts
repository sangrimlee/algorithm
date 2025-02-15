import type { ListNode } from '@algorithm/lib';

/**
 * 725. Split Linked List in Parts
 * https://leetcode.com/problems/split-linked-list-in-parts
 */
export function splitListToParts(head: ListNode | null, k: number): (ListNode | null)[] {
  const getTotalLength = () => {
    let totalLength = 0;
    let currentNode = head;
    while (currentNode !== null) {
      totalLength += 1;
      currentNode = currentNode.next;
    }
    return totalLength;
  };

  const totalLength = getTotalLength();
  const width = Math.floor(totalLength / k);
  const remain = totalLength % k;

  const answer = new Array<ListNode | null>(k).fill(null);
  let prevNode = head;
  for (let i = 0; i < k; i++) {
    let currentNode = prevNode;
    const currentWidth = i < remain ? width + 1 : width;
    for (let j = 0; j < currentWidth - 1; j++) {
      if (currentNode !== null) {
        currentNode = currentNode.next;
      }
    }
    answer[i] = prevNode;
    if (currentNode !== null) {
      prevNode = currentNode.next;
      currentNode.next = null;
    }
  }
  return answer;
}
