/**
 * 1443. Minimum Time to Collect All Apples in a Tree
 * https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree
 */
export function minTime(n: number, edges: number[][], hasApple: boolean[]): number {
  const tree = new Array(n).fill(undefined).map(() => new Array<number>());
  for (const [a, b] of edges) {
    tree[a].push(b);
    tree[b].push(a);
  }

  const dfs = (currentNode = 0, parentNode = -1): number => {
    let [totalTime, childTime] = [0, 0];

    for (const childNode of tree[currentNode]) {
      if (childNode === parentNode) {
        continue;
      }
      childTime = dfs(childNode, currentNode);

      if (0 < childTime || hasApple[childNode]) {
        totalTime += childTime + 2;
      }
    }

    return totalTime;
  };

  return dfs(0, -1);
}
