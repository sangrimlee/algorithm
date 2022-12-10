/**
 * 745. Prefix and Suffix Search
 * https://leetcode.com/problems/prefix-and-suffix-search/
 */

class TrieNode {
  index: number;
  children: Map<string, TrieNode>;
  constructor(index: number) {
    this.index = index;
    this.children = new Map();
  }

  get(char: string) {
    return this.children.get(char);
  }

  add(char: string, index: number): TrieNode {
    const childNode = this.children.get(char);
    if (childNode) {
      childNode.index = index;
      return childNode;
    }
    const newNode = new TrieNode(index);
    this.children.set(char, newNode);
    return newNode;
  }
}

class Trie {
  rootNode: TrieNode;
  constructor() {
    this.rootNode = new TrieNode(-1);
  }

  addWord(word: string, index: number): void {
    let currentNode = this.rootNode;
    for (const char of word) {
      currentNode = currentNode.add(char, index);
    }
  }

  findWord(word: string) {
    let currentNode = this.rootNode;
    for (const char of word) {
      const nextNode = currentNode.get(char);
      if (nextNode) {
        currentNode = nextNode;
      } else {
        return -1;
      }
    }
    return currentNode.index;
  }
}

export class WordFilter {
  trie: Trie;

  constructor(words: string[]) {
    this.trie = new Trie();
    words.forEach((word, index) => {
      this.addSuffix(word).forEach((newWord) => {
        this.trie.addWord(newWord, index);
      });
    });
  }

  f(prefix: string, suffix: string): number {
    return this.trie.findWord(`${suffix}#${prefix}`);
  }

  addSuffix(word: string): string[] {
    const result: string[] = [];
    for (let i = 0; i <= word.length; i++) {
      result.push(`${word.slice(word.length - i)}#${word}`);
    }
    return result;
  }
}
