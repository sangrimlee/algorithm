/**
 * 138. Copy List with Random Pointer
 * https://leetcode.com/problems/copy-list-with-random-pointer
 */

export class Node {
  val: number;
  next: Node | null;
  random: Node | null;
  constructor(val?: number, next?: Node, random?: Node) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}

export function copyRandomList(head: Node | null): Node | null {
  if (head === null) {
    return null;
  }
  let currentNode: Node | null;
  currentNode = head;
  while (currentNode) {
    const newNode: Node = new Node(currentNode.val);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    currentNode = newNode.next;
  }

  currentNode = head;
  while (currentNode) {
    if (currentNode.next && currentNode.random) {
      currentNode.next.random = currentNode.random.next;
    }
    currentNode = currentNode.next?.next ?? null;
  }

  const oldHead = head;
  const newHead = head.next;
  let oldCurrentNode: Node | null = oldHead;
  let newCurrentNode: Node | null = newHead;
  while (oldCurrentNode && newCurrentNode) {
    oldCurrentNode.next = oldCurrentNode.next?.next ?? null;
    oldCurrentNode = oldCurrentNode.next;

    newCurrentNode.next = newCurrentNode.next?.next ?? null;
    newCurrentNode = newCurrentNode.next;
  }
  return newHead;
}
