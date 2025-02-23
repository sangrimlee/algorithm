import { TreeNode } from '@algorithm/lib';

/**
 * 1030. Matrix Cells in Distance Order
 * https://leetcode.com/problems/matrix-cells-in-distance-order
 */
export function recoverFromPreorder(traversal: string): TreeNode | null {
  let currentIndex = 0;
  const stack: TreeNode[] = [];
  while (currentIndex < traversal.length) {
    const [depth, nextIndexAfterDepth] = findDepth(traversal, currentIndex);
    const [value, nextIndexAfterValue] = findValue(traversal, nextIndexAfterDepth);
    currentIndex = nextIndexAfterValue;

    const node = new TreeNode(value);
    while (stack.length > depth) {
      stack.pop();
    }

    if (stack.length > 0) {
      const peek = stack[stack.length - 1];
      if (peek.left === null) {
        peek.left = node;
      } else {
        peek.right = node;
      }
    }
    stack.push(node);
  }
  return stack[0];
}

function findDepth(traversal: string, startIndex: number): [number, number] {
  let depth = 0;
  while (startIndex + depth < traversal.length && traversal[startIndex + depth] === '-') {
    depth += 1;
  }
  return [depth, startIndex + depth];
}

function findValue(traversal: string, startIndex: number): [number, number] {
  let value = 0;
  let currentIndex = startIndex;
  while (currentIndex < traversal.length && traversal[currentIndex] !== '-') {
    value = 10 * value + Number(traversal[currentIndex]);
    currentIndex += 1;
  }
  return [value, currentIndex];
}
