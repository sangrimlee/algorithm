type CharCount = { [key: string]: number };

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

  const dfs = (currentNode: number, parentNode: number): CharCount => {
    const charCount: CharCount = {};
    charCount[labels[currentNode]] = 1;

    for (const childNode of trees[currentNode]) {
      if (childNode === parentNode) {
        continue;
      }
      const childCharCount = dfs(childNode, currentNode);

      for (const label in childCharCount) {
        if (charCount[label] === undefined) {
          charCount[label] = 0;
        }
        charCount[label] += childCharCount[label];
      }
    }

    answer[currentNode] = charCount[labels[currentNode]];
    return charCount;
  };

  dfs(0, -1);
  return answer;
}
