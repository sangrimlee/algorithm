import { createTree } from '@algorithm/lib';
import { levelOrder } from './0102';

describe('LeetCode 0102', () => {
  test('Example 1', () => {
    const root = createTree([3, 9, 20, null, null, 15, 7]);
    expect(levelOrder(root)).toEqual([[3], [9, 20], [15, 7]]);
  });
  test('Example 2', () => {
    const root = createTree([1]);
    expect(levelOrder(root)).toEqual([[1]]);
  });
  test('Example 3', () => {
    const root = createTree([]);
    expect(levelOrder(root)).toEqual([]);
  });
});
