/**
 * 1519. Number of Nodes in the Sub-Tree With the Same Label
 * https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label
 */
export function countSubTrees(n: number, edges: number[][], labels: string): number[] {
  const answer = new Array<number>(n).fill(0);
  const trees = new Array(n).fill(undefined).map(() => new Array<number>());
  for (const [a, b] of edges) {
    trees[a].push(b);
    trees[b].push(a);
  }

  const dfs = (currentNode: number, parentNode: number): Map<string, number> => {
    const charCounter = new Map<string, number>();
    charCounter.set(labels[currentNode], 1);

    for (const childNode of trees[currentNode]) {
      if (childNode === parentNode) {
        continue;
      }
      const childCharCounter = dfs(childNode, currentNode);

      for (const [label, childCharCount] of childCharCounter) {
        const charCount = charCounter.get(label) ?? 0;
        charCounter.set(label, charCount + childCharCount);
      }
    }

    answer[currentNode] = charCounter.get(labels[currentNode]) ?? 0;
    return charCounter;
  };

  dfs(0, -1);
  return answer;
}
