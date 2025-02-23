import type { NArrayTreeNode } from '@algorithm/lib';

/**
 * 559. Maximum Depth of N-ary Tree
 * https://leetcode.com/problems/maximum-depth-of-n-ary-tree
 */
export function maxDepth(root: NArrayTreeNode | null): number {
  if (!root) {
    return 0;
  }
  return 1 + root.children.reduce((prev, node) => Math.max(prev, maxDepth(node)), 0);
}
