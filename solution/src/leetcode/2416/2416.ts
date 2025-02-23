/**
 * 2416. Sum of Prefix Scores of Strings
 * https://leetcode.com/problems/sum-of-prefix-scores-of-strings
 */
export function sumPrefixScores(words: string[]): number[] {
  const trie = new Trie(words);
  return words.map((word) => trie.count(word));
}

class TrieNode {
  public count: number;
  private readonly children: Map<string, TrieNode>;

  constructor() {
    this.count = 0;
    this.children = new Map();
  }

  hasChildNode(char: string): boolean {
    return this.children.has(char);
  }

  getChildNode(char: string): TrieNode {
    const childNode = this.children.get(char) ?? new TrieNode();
    this.children.set(char, childNode);
    return childNode;
  }
}

class Trie {
  private readonly root: TrieNode;

  constructor(words: string[]) {
    this.root = new TrieNode();
    words.forEach((word) => {
      this.insert(word);
    });
  }

  insert(word: string): void {
    let node = this.root;
    for (const char of word) {
      const childNode = node.getChildNode(char);
      childNode.count += 1;
      node = childNode;
    }
  }

  count(word: string): number {
    let result = 0;
    let node = this.root;
    for (const char of word) {
      if (!node.hasChildNode(char)) {
        return result;
      }
      const childNode = node.getChildNode(char);
      result += childNode.count;
      node = childNode;
    }
    return result;
  }
}
