import { inorderTraversal } from './leetcode-2649';

describe('2023-07-12: LeetCode 2649', () => {
  test('Example 1', () => {
    expect([...inorderTraversal([[[6]], [1, 3], []])]).toEqual([6, 1, 3]);
  });
  test('Example 2', () => {
    expect([...inorderTraversal([])]).toEqual([]);
  });
});
