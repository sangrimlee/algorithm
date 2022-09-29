export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function createLinkedList(arr: number[]): ListNode | null {
  const startNode = new ListNode();
  let currentNode = startNode;
  arr.forEach((value) => {
    currentNode.next = new ListNode(value);
    currentNode = currentNode.next;
  });
  return startNode.next;
}

export function linkedListToArr(head: ListNode | null): number[] {
  if (head === null) {
    return [];
  }

  const arr: number[] = [];
  let currentNode: ListNode | null = head;

  while (currentNode !== null) {
    arr.push(currentNode.val);
    currentNode = currentNode.next;
  }

  return arr;
}
