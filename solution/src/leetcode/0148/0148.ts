import { ListNode } from '@algorithm/lib';

/**
 * 148. Sort List
 * https://leetcode.com/problems/sort-list
 */
export function sortList(head: ListNode | null): ListNode | null {
  if (!head?.next) {
    return head;
  }

  const [left, right] = divide(head);
  return merge(sortList(left), sortList(right));
}

const divide = (head: ListNode) => {
  let fast: ListNode | null = head.next;
  let slow: ListNode = head;
  while (fast?.next && slow.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  const mid = slow.next;
  slow.next = null;
  return [head, mid];
};

const merge = (left: ListNode | null, right: ListNode | null): ListNode | null => {
  if (!left || !right) {
    return left ?? right;
  }
  const merged = new ListNode(Number.MIN_SAFE_INTEGER);
  let current = merged;
  while (left && right) {
    if (left.val < right.val) {
      current.next = left;
      left = left.next;
    } else {
      current.next = right;
      right = right.next;
    }
    current = current.next;
  }
  current.next = left ?? right;
  return merged.next;
};

/** 단순하게 배열로 변환 후에 다시 LinkedList로 변환
function sortList2(head: ListNode | null): ListNode | null {
  const linkedListToArr = (node: ListNode | null) => {
    const arr = [];
    let current = node;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  };

  const arrToLinkedList = (arr: number[]) => {
    const head = new ListNode(Number.MIN_SAFE_INTEGER);
    let current = head;
    for (const num of arr) {
      current.next = new ListNode(num);
      current = current.next;
    }
    return head.next;
  };

  return arrToLinkedList(linkedListToArr(head).sort((a, b) => a - b));
}
 */
