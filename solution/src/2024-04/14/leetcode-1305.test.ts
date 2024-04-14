import { createTree } from '@algorithm/lib';
import { getAllElements } from './leetcode-1305';

describe('2024-04-14: LeetCode 1305', () => {
  test('Example 1', () => {
    const root1 = createTree([2, 1, 4]);
    const root2 = createTree([1, 0, 3]);
    expect(getAllElements(root1, root2)).toEqual([0, 1, 1, 2, 3, 4]);
  });
  test('Example 2', () => {
    const root1 = createTree([1, null, 8]);
    const root2 = createTree([8, 1]);
    expect(getAllElements(root1, root2)).toEqual([1, 1, 8, 8]);
  });
});
