import { TreeNode } from '@algorithm/lib';
import { allPossibleFBT } from './leetcode-894';

describe('2023-07-23: LeetCode 894', () => {
  function convertTreeToArr(node: TreeNode | null) {
    const arr = [];
    let queue = [node];

    while (0 < queue.length) {
      const nextQueue = [];
      for (const currentNode of queue) {
        if (currentNode) {
          nextQueue.push(currentNode.left);
          nextQueue.push(currentNode.right);
        }
      }
      arr.push(...queue.map((node) => (node ? node.val : node)));
      queue = nextQueue;
    }

    while (0 < arr.length && arr.at(-1) === null) {
      arr.pop();
    }

    return arr;
  }

  test('Example 1', () => {
    expect(allPossibleFBT(7).map(convertTreeToArr)).toEqual([
      [0, 0, 0, null, null, 0, 0, null, null, 0, 0],
      [0, 0, 0, null, null, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, null, null, null, null, 0, 0],
      [0, 0, 0, 0, 0, null, null, 0, 0],
    ]);
  });

  test('Example 2', () => {
    expect(allPossibleFBT(3).map(convertTreeToArr)).toEqual([[0, 0, 0]]);
  });
});
