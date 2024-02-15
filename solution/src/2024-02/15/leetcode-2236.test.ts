import { createTree } from '@algorithm/lib';
import { checkTree } from './leetcode-2236';

describe('2024-02-15: LeetCode 2236', () => {
  test('Example 1', () => {
    const root = createTree([10, 4, 6]);
    expect(checkTree(root)).toBe(true);
  });
  test('Example 2', () => {
    const root = createTree([5, 3, 1]);
    expect(checkTree(root)).toBe(false);
  });
});
