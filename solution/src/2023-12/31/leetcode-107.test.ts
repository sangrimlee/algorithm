import { createTree } from '@algorithm/lib';
import { levelOrderBottom } from './leetcode-107';

describe('2023-12-31: LeetCode 107', () => {
  test('Example 1', () => {
    const root = createTree([3, 9, 20, null, null, 15, 7]);
    expect(levelOrderBottom(root)).toEqual([[15, 7], [9, 20], [3]]);
  });
  test('Example 2', () => {
    const root = createTree([1]);
    expect(levelOrderBottom(root)).toEqual([[1]]);
  });
  test('Example 3', () => {
    const root = createTree([]);
    expect(levelOrderBottom(root)).toEqual([]);
  });
});
