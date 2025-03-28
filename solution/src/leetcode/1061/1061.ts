import { range } from '@algorithm/lib';

/**
 * 1061. Lexicographically Smallest Equivalent String
 * https://leetcode.com/problems/lexicographically-smallest-equivalent-string
 */
export function smallestEquivalentString(s1: string, s2: string, baseStr: string): string {
  const n = s1.length;
  const graph = new Map<string, Set<string>>();

  const addGraphItem = (key: string, value: string) => {
    const graphItem = graph.get(key);
    if (graphItem === undefined) {
      graph.set(key, new Set(value));
    } else {
      graphItem.add(value);
    }
  };

  for (const i of range(n)) {
    const [c1, c2] = [s1[i], s2[i]];
    addGraphItem(c1, c2);
    addGraphItem(c2, c1);
  }

  const lexicographicallySmallest = findLexicographicallySmallest(graph);
  return baseStr
    .split('')
    .reduce((prev, curr) => prev + (lexicographicallySmallest.get(curr) ?? curr), '');
}

const findLexicographicallySmallest = (graph: Map<string, Set<string>>): Map<string, string> => {
  const lexicographicallySmallest = new Map<string, string>();

  const findLexicographicallySmallestPerGroup = (startChar: string) => {
    const group = new Set<string>(startChar);

    let queue = [startChar];
    let smallestChar = startChar;
    while (0 < queue.length) {
      const nextQueue = [];
      for (const currentChar of queue) {
        const nextChars = graph.get(currentChar);
        if (nextChars === undefined) {
          continue;
        }
        for (const nextChar of nextChars) {
          if (!group.has(nextChar)) {
            group.add(nextChar);
            nextQueue.push(nextChar);
            if (nextChar < smallestChar) {
              smallestChar = nextChar;
            }
          }
        }
      }
      queue = nextQueue;
    }

    for (const char of group.values()) {
      lexicographicallySmallest.set(char, smallestChar);
    }
  };

  for (const char of graph.keys()) {
    if (!lexicographicallySmallest.has(char)) {
      findLexicographicallySmallestPerGroup(char);
    }
  }

  return lexicographicallySmallest;
};
