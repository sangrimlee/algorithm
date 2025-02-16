export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
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
