import { ListNode, getIntersectionNode } from './leetcode-160';

describe('2022-06-06: LeetCode 160', () => {
  function createExample(
    intersectionVal: number,
    listA: number[],
    listB: number[],
    skipA: number,
    skipB: number
  ) {
    if (listA.length === 0 || listB.length === 0) {
      throw new Error('배열의 길이는 1이상이어야 합니다.');
    }
    if (
      0 < intersectionVal &&
      !(listA[skipA] === intersectionVal && listB[skipB] === intersectionVal)
    ) {
      throw new Error('잘못된 예시 데이터입니다.');
    }

    function createLinkedList(arr: number[]): [ListNode | null, ListNode] {
      const head = new ListNode(0);
      let node = head;
      arr.forEach((value) => {
        node.next = new ListNode(value);
        node = node.next;
      });
      return [head.next, node];
    }

    const [headA, nodeA] = createLinkedList(listA.slice(0, skipA));
    const [headB, nodeB] = createLinkedList(listB.slice(0, skipB));
    const [headC] = createLinkedList(listA.slice(skipA));

    nodeA.next = headC;
    nodeB.next = headC;
    return {
      headA,
      headB,
      headC,
    };
  }

  test('Example 1', () => {
    const { headA, headB, headC } = createExample(
      8,
      [4, 1, 8, 4, 5],
      [5, 6, 1, 8, 4, 5],
      2,
      3
    );
    expect(getIntersectionNode(headA, headB)).toEqual(headC);
  });

  test('Example 2', () => {
    const { headA, headB, headC } = createExample(
      2,
      [1, 9, 1, 2, 4],
      [3, 2, 4],
      3,
      1
    );
    expect(getIntersectionNode(headA, headB)).toEqual(headC);
  });

  test('Example 3', () => {
    const { headA, headB, headC } = createExample(0, [2, 6, 4], [1, 5], 3, 2);
    expect(getIntersectionNode(headA, headB)).toEqual(headC);
  });
});
