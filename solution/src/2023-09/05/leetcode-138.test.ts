import { Node, copyRandomList } from './leetcode-138';

describe('2023-09-05: LeetCode 138', () => {
  function createList(arr: [number, number | null][]): Node | null {
    const n = arr.length;
    const nodeList = arr.map(([val]) => new Node(val));

    for (let i = 0; i < n; i++) {
      const node = nodeList[i];
      const random = arr[i][1];
      node.next = nodeList[i + 1] ?? null;
      node.random = random !== null ? nodeList[random] : null;
    }
    return nodeList[0];
  }

  function compare(node1: Node | null, node2: Node | null, recursively = true): boolean {
    if (node1 === null && node2 === null) {
      return true;
    }
    if (node1 === null || node2 === null || node1 === node2) {
      return false;
    }
    if (node1.val !== node2.val) {
      return false;
    }
    if (!recursively) {
      return true;
    }
    return compare(node1.next, node2.next) && compare(node1.random, node2.random, false);
  }

  test('Example 1', () => {
    const arr: [number, number | null][] = [
      [7, null],
      [13, 0],
      [11, 4],
      [10, 2],
      [1, 0],
    ];
    const head = createList(arr);
    const copiedHead = copyRandomList(head);
    expect(compare(head, copiedHead)).toBeTruthy();
  });

  test('Example 2', () => {
    const arr: [number, number | null][] = [
      [1, 1],
      [2, 1],
    ];
    const head = createList(arr);
    const copiedHead = copyRandomList(head);
    expect(compare(head, copiedHead)).toBeTruthy();
  });

  test('Example 3', () => {
    const arr: [number, number | null][] = [
      [3, null],
      [3, 0],
      [3, null],
    ];
    const head = createList(arr);
    const copiedHead = copyRandomList(head);
    expect(compare(head, copiedHead)).toBeTruthy();
  });
});
