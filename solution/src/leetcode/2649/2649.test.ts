import { inorderTraversal } from './2649';

describe('LeetCode 2649', () => {
  test('Example 1', () => {
    expect([...inorderTraversal([[[6]], [1, 3], []])]).toEqual([6, 1, 3]);
  });
  test('Example 2', () => {
    expect([...inorderTraversal([])]).toEqual([]);
  });
});
