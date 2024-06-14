/**
 * 1104. Path In Zigzag Labelled Binary Tree
 * https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree
 */
export function pathInZigZagTree(label: number): number[] {
  const answer: number[] = [];

  let currentNode = label;
  let currentLevel = getLevel(label);
  while (0 < currentNode) {
    answer.push(currentNode);
    const minNode = 1 << (currentLevel - 1);
    const maxNode = (1 << currentLevel) - 1;
    currentNode = Math.floor((minNode + maxNode - currentNode) / 2);
    currentLevel -= 1;
  }
  return answer.reverse();
}

function getLevel(label: number): number {
  let level = 1;
  let nodeCount = 1;
  while (nodeCount * 2 <= label) {
    nodeCount *= 2;
    level += 1;
  }
  return level;
}
