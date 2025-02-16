import { ListNode } from '@algorithm/lib';

/**
 * 445. Add Two Numbers II
 * https://leetcode.com/problems/add-two-numbers-ii
 */
export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const convertStack = (node: ListNode | null) => {
    const stack: number[] = [];
    let currentNode: ListNode | null = node;
    while (currentNode !== null) {
      stack.push(currentNode.val);
      currentNode = currentNode.next;
    }
    return stack;
  };

  const stack1 = convertStack(l1);
  const stack2 = convertStack(l2);

  let currentValue = 0;
  let prevNode: ListNode | null = null;
  while (0 < stack1.length || 0 < stack2.length) {
    currentValue += (stack1.pop() ?? 0) + (stack2.pop() ?? 0);
    prevNode = new ListNode(currentValue % 10, prevNode);
    currentValue = Math.floor(currentValue / 10);
  }

  return currentValue === 0 ? prevNode : new ListNode(currentValue, prevNode);
}
