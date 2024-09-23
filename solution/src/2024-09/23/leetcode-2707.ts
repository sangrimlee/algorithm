/**
 * 2707. Extra Characters in a String
 * https://leetcode.com/problems/extra-characters-in-a-string
 */
export function minExtraChar(s: string, dictionary: string[]): number {
  const n = s.length;
  const rootNode = createTrie(dictionary);
  const dp = new Array<number>(n + 1).fill(0);

  for (let start = n - 1; 0 <= start; start--) {
    dp[start] = dp[start + 1] + 1;
    let node = rootNode;
    for (let end = start; end < n; end++) {
      if (!node.hasChildNode(s[end])) break;
      node = node.getChildNode(s[end]);
      if (node.isWord) {
        dp[start] = Math.min(dp[start], dp[end + 1]);
      }
    }
  }

  return dp[0];
}

function createTrie(words: string[]) {
  const rootNode = new TrieNode();
  for (const word of words) {
    let currentNode = rootNode;
    for (const char of word) {
      currentNode = currentNode.getChildNode(char);
    }
    currentNode.isWord = true;
  }
  return rootNode;
}

class TrieNode {
  private readonly children: Map<string, TrieNode>;
  public isWord: boolean;

  constructor() {
    this.children = new Map();
    this.isWord = false;
  }

  hasChildNode(char: string): boolean {
    return this.children.has(char);
  }

  getChildNode(char: string): TrieNode {
    if (this.hasChildNode(char)) {
      return this.children.get(char)!;
    }
    const newNode = new TrieNode();
    this.children.set(char, newNode);
    return newNode;
  }
}
