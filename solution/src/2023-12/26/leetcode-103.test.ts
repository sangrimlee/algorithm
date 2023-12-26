import { createTree } from '@algorithm/lib';
import { zigzagLevelOrder } from './leetcode-103';

describe('2023-12-26: LeetCode 103', () => {
  test('Example 1', () => {
    const root = createTree([3, 9, 20, null, null, 15, 7]);
    expect(zigzagLevelOrder(root)).toEqual([[3], [20, 9], [15, 7]]);
  });
  test('Example 2', () => {
    const root = createTree([1]);
    expect(zigzagLevelOrder(root)).toEqual([[1]]);
  });
  test('Example 3', () => {
    const root = createTree([]);
    expect(zigzagLevelOrder(root)).toEqual([]);
  });
});
