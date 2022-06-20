/**
 * 820. Short Encoding of Words
 * https://leetcode.com/problems/short-encoding-of-words/
 */

type TrieNode = Map<string, TrieNode>;

class SuffixTrie {
  private rootNode: TrieNode;
  constructor() {
    this.rootNode = new Map();
  }

  add(word: string) {
    return word.split('').reduceRight((currentNode, char) => {
      const childNode = currentNode.get(char);
      if (childNode) {
        return childNode;
      } else {
        const newNode = new Map();
        currentNode.set(char, newNode);
        return newNode;
      }
    }, this.rootNode);
  }
}

export function minimumLengthEncoding(words: string[]): number {
  const wordsNoDuplicates = [...new Set(words)];
  const trie = new SuffixTrie();
  const leafNodes = wordsNoDuplicates.map((word) => trie.add(word));

  return leafNodes.reduce(
    (previousValue, leafNode, currentIndex) =>
      previousValue +
      (leafNode.size === 0 ? wordsNoDuplicates[currentIndex].length + 1 : 0),
    0
  );
}
