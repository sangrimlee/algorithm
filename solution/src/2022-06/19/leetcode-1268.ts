/**
 * 1268. Search Suggestions System
 * https://leetcode.com/problems/search-suggestions-system/
 */

class TrieNode {
  children: Map<string, TrieNode>;
  products: string[];
  constructor() {
    this.children = new Map();
    this.products = [];
  }

  addProduct(product: string) {
    if (this.products.length < 3) {
      this.products.push(product);
    }
  }

  addChildNode(char: string) {
    const childNode = this.children.get(char);
    if (childNode) {
      return childNode;
    }
    const newNode = new TrieNode();
    this.children.set(char, newNode);
    return newNode;
  }

  getChildNode(char: string) {
    return this.children.get(char);
  }
}

class Trie {
  rootNode: TrieNode;
  constructor(products: string[]) {
    this.rootNode = new TrieNode();
    products.forEach((product) => { this.addProduct(product); });
  }

  addProduct(product: string) {
    let currentNode = this.rootNode;
    for (const char of product) {
      currentNode = currentNode.addChildNode(char);
      currentNode.addProduct(product);
    }
  }

  search(searchWord: string): string[][] {
    const searchResult: string[][] = [];
    let currentNode: TrieNode | undefined = this.rootNode;
    for (const char of searchWord) {
      currentNode = currentNode?.getChildNode(char);
      if (currentNode) {
        searchResult.push(currentNode.products);
      } else {
        searchResult.push([]);
      }
    }
    return searchResult;
  }
}

export function suggestedProducts(products: string[], searchWord: string): string[][] {
  products.sort();
  const trie = new Trie(products);
  return trie.search(searchWord);
}
