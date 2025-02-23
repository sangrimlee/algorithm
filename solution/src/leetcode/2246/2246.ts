import { range } from '@algorithm/lib';

/**
 * 2246. Longest Path With Different Adjacent Characters
 * https://leetcode.com/problems/longest-path-with-different-adjacent-characters
 */
export function longestPath(parent: number[], s: string): number {
  const n = parent.length;
  const tree = new Array(n).fill(undefined).map(() => new Array<number>());

  for (const i of range(1, n)) {
    const parentNode = parent[i];
    tree[parentNode].push(i);
  }

  let answer = 1;
  const dfs = (currentNode = 0): number => {
    if (tree[currentNode].length === 0) {
      return 1;
    }

    let longestChain = 0;
    let secondLongestChain = 0;
    for (const childNode of tree[currentNode]) {
      const childLongestChain = dfs(childNode);
      if (s[currentNode] === s[childNode]) {
        continue;
      }
      if (longestChain < childLongestChain) {
        secondLongestChain = longestChain;
        longestChain = childLongestChain;
      } else {
        secondLongestChain = Math.max(secondLongestChain, childLongestChain);
      }
    }

    answer = Math.max(answer, longestChain + secondLongestChain + 1);
    return longestChain + 1;
  };

  dfs();
  return answer;
}
