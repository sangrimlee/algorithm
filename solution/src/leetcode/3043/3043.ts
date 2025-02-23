/**
 * 3043. Find the Length of the Longest Common Prefix
 * https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix
 */
export function longestCommonPrefix(arr1: number[], arr2: number[]): number {
  const trie = new Trie(arr1);
  return arr2.reduce((prev, num) => Math.max(prev, trie.findLongestPrefix(num)), 0);
}

class TrieNode {
  children: (TrieNode | null)[];

  constructor() {
    this.children = new Array<TrieNode | null>(10).fill(null);
  }
}

class Trie {
  private readonly root: TrieNode;

  constructor(arr: number[]) {
    this.root = new TrieNode();
    arr.forEach((num) => {
      this.insert(num);
    });
  }

  insert(num: number): void {
    let node = this.root;
    for (const digit of String(num)) {
      const i = parseInt(digit);
      const childNode = node.children[i];
      if (childNode !== null) {
        node = childNode;
      } else {
        const newNode = new TrieNode();
        node.children[i] = newNode;
        node = newNode;
      }
    }
  }

  findLongestPrefix(num: number): number {
    let node = this.root;
    let maxLength = 0;
    for (const digit of String(num)) {
      const i = parseInt(digit);
      const childNode = node.children[i];
      if (childNode === null) {
        break;
      }
      node = childNode;
      maxLength += 1;
    }
    return maxLength;
  }
}
