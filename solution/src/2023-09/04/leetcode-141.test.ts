import { ListNode } from '@algorithm/lib';
import { hasCycle } from './leetcode-141';

describe('2023-09-04: LeetCode 141', () => {
  test('Example 1', () => {
    const arr = [3, 2, 0, -4];

    const nodes = arr.map((val) => new ListNode(val));
    nodes.forEach((node, i) => (node.next = nodes[i + 1]));
    nodes[nodes.length - 1].next = nodes[1];

    expect(hasCycle(nodes[0])).toBeTruthy();
  });
  test('Example 2', () => {
    const arr = [1, 2];

    const nodes = arr.map((val) => new ListNode(val));
    nodes.forEach((node, i) => (node.next = nodes[i + 1]));
    nodes[nodes.length - 1].next = nodes[0];

    expect(hasCycle(nodes[0])).toBeTruthy();
  });
  test('Example 3', () => {
    const arr = [1];

    const nodes = arr.map((val) => new ListNode(val));
    nodes.forEach((node, i) => (node.next = nodes[i + 1]));

    expect(hasCycle(nodes[0])).toBeFalsy();
  });
});
