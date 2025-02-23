/**
 * 3045. Count Prefix and Suffix Pairs II
 * https://leetcode.com/problems/count-prefix-and-suffix-pairs-ii
 */
export function countPrefixSuffixPairs(words: string[]): number {
  const rootNode = new TrieNode();

  let answer = 0;
  for (const word of words) {
    let node = rootNode;
    for (let i = 0; i < word.length; i++) {
      const key = `${word[i]},${word[word.length - i - 1]}`;
      node = node.getChildNode(key);
      answer += node.count;
    }
    node.count += 1;
  }
  return answer;
}

class TrieNode {
  public count = 0;
  private readonly children = new Map<string, TrieNode>();

  getChildNode(char: string): TrieNode {
    const childNode = this.children.get(char) ?? new TrieNode();
    this.children.set(char, childNode);
    return childNode;
  }
}
