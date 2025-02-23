import { pathSum } from './0113';
import { createTree } from '@algorithm/lib';

describe('LeetCode 0113', () => {
  test('Example 1', () => {
    const root = createTree([1, 2, 3]);
    const targetSum = 4;
    expect(pathSum(root, targetSum)).toEqual([[1, 3]]);
  });

  test('Example 2', () => {
    const root = createTree([1, 2, 3]);
    const targetSum = 5;
    expect(pathSum(root, targetSum)).toEqual([]);
  });

  test('Example 3', () => {
    const root = createTree([1, 2]);
    const targetSum = 0;
    expect(pathSum(root, targetSum)).toEqual([]);
  });
});
