import type { ListNode } from '@algorithm/lib';
import { TreeNode } from '@algorithm/lib';

/**
 * 109. Convert Sorted List to Binary Search Tree
 * https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree
 */
export function sortedListToBST(head: ListNode | null): TreeNode | null {
  function findMidNode(head: ListNode | null, tail: ListNode | null): ListNode | null {
    if (head === tail || head === null) {
      return null;
    }

    let fast: ListNode | null = head;
    let slow: ListNode | null = head;
    while (fast !== tail && fast?.next !== tail) {
      fast = fast?.next?.next ?? null;
      slow = slow?.next ?? null;
    }
    return slow;
  }

  function buildTree(head: ListNode | null, tail: ListNode | null): TreeNode | null {
    const mid = findMidNode(head, tail);
    if (mid === null) {
      return null;
    }
    const node = new TreeNode(mid.val);
    node.left = buildTree(head, mid);
    node.right = buildTree(mid.next, tail);
    return node;
  }

  return buildTree(head, null);
}
