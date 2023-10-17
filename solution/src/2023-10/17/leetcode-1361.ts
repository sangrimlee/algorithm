/**
 * 1361. Validate Binary Tree Nodes
 * https://leetcode.com/problems/validate-binary-tree-nodes
 */
export function validateBinaryTreeNodes(
  n: number,
  leftChild: number[],
  rightChild: number[],
): boolean {
  let remainNode = n;
  const parents = new Array(n).fill(undefined).map((_, i) => i);

  const find = (node: number): number => {
    if (node !== parents[node]) {
      parents[node] = find(parents[node]);
    }
    return parents[node];
  };
  const union = (parent: number, child: number) => {
    const parentNode = find(parent);
    const childNode = find(child);
    if (child !== childNode || parentNode === childNode) {
      return false;
    }
    remainNode -= 1;
    parents[childNode] = parentNode;
    return true;
  };

  for (let node = 0; node < n; node++) {
    for (const childNode of [leftChild[node], rightChild[node]]) {
      if (childNode === -1) continue;
      if (!union(node, childNode)) {
        return false;
      }
    }
  }
  return remainNode === 1;
}
