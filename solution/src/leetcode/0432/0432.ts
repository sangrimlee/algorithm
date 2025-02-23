/**
 * 432. All O`one Data Structure
 * https://leetcode.com/problems/all-oone-data-structure
 */
export class AllOne {
  private readonly head: Node;
  private readonly tail: Node;
  private readonly map: Map<string, Node>;

  constructor() {
    this.head = new Node(0);
    this.tail = new Node(0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.map = new Map();
  }

  inc(key: string): void {
    const node = this.map.get(key);
    if (node) {
      node.keys.delete(key);
      const freq = node.freq;
      const nextNode = node.next;
      if (nextNode && (nextNode === this.tail || nextNode.freq !== freq + 1)) {
        const newNode = new Node(freq + 1);
        newNode.keys.add(key);
        newNode.prev = node;
        newNode.next = nextNode;
        node.next = newNode;
        nextNode.prev = newNode;
        this.map.set(key, newNode);
      } else if (nextNode) {
        nextNode.keys.add(key);
        this.map.set(key, nextNode);
      }

      if (node.keys.size === 0) {
        this.removeNode(node);
      }
    } else {
      const firstNode = this.head.next;
      if (firstNode && (firstNode === this.tail || 1 < firstNode.freq)) {
        const newNode = new Node(1);
        newNode.keys.add(key);
        newNode.prev = this.head;
        newNode.next = firstNode;
        this.head.next = newNode;
        firstNode.prev = newNode;
        this.map.set(key, newNode);
      } else if (firstNode) {
        firstNode.keys.add(key);
        this.map.set(key, firstNode);
      }
    }
  }

  dec(key: string): void {
    const node = this.map.get(key);
    if (!node) {
      return;
    }
    node.keys.delete(key);
    const freq = node.freq;

    if (freq === 1) {
      this.map.delete(key);
    } else {
      const prevNode = node.prev;
      if (prevNode && (prevNode === this.head || prevNode.freq !== freq - 1)) {
        const newNode = new Node(freq - 1);
        newNode.keys.add(key);
        newNode.prev = prevNode;
        newNode.next = node;
        prevNode.next = newNode;
        node.prev = newNode;
        this.map.set(key, newNode);
      } else if (prevNode) {
        prevNode.keys.add(key);
        this.map.set(key, prevNode);
      }
    }

    if (node.keys.size === 0) {
      this.removeNode(node);
    }
  }

  getMaxKey(): string {
    if (!this.tail.prev || this.tail.prev === this.head) {
      return '';
    }
    return this.tail.prev.keys.values().next().value ?? '';
  }

  getMinKey(): string {
    if (!this.head.next || this.head.next === this.tail) {
      return '';
    }
    return this.head.next.keys.values().next().value ?? '';
  }

  removeNode(node: Node): void {
    const prevNode = node.prev;
    const nextNode = node.next;
    if (prevNode) {
      prevNode.next = nextNode;
    }
    if (nextNode) {
      nextNode.prev = prevNode;
    }
  }
}

class Node {
  public freq: number;
  public prev: Node | null;
  public next: Node | null;
  public readonly keys: Set<string>;

  constructor(freq: number) {
    this.freq = freq;
    this.prev = null;
    this.next = null;
    this.keys = new Set();
  }
}
