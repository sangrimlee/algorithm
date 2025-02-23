/**
 * 139. Word Break
 * https://leetcode.com/problems/word-break
 */
class TrieNode {
  public isWord: boolean;
  private readonly children: Map<string, TrieNode>;
  constructor() {
    this.isWord = false;
    this.children = new Map();
  }

  getChildNode(char: string): TrieNode {
    const childNode = this.children.get(char) ?? new TrieNode();
    this.children.set(char, childNode);
    return childNode;
  }

  hasChildNode(char: string) {
    return this.children.has(char);
  }
}

export function wordBreak(s: string, wordDict: string[]): boolean {
  const rootNode = new TrieNode();
  for (const word of wordDict) {
    let currentNode = rootNode;
    for (const char of word) {
      currentNode = currentNode.getChildNode(char);
    }
    currentNode.isWord = true;
  }

  const n = s.length;
  const dp = new Array<boolean>(n).fill(false);
  for (let i = 0; i < n; i++) {
    if (i === 0 || dp[i - 1]) {
      let currentNode = rootNode;
      for (let j = i; j < n; j++) {
        const char = s[j];
        if (!currentNode.hasChildNode(char)) {
          break;
        }
        currentNode = currentNode.getChildNode(char);
        if (currentNode.isWord) {
          dp[j] = true;
        }
      }
    }
  }

  return dp[n - 1];
}
