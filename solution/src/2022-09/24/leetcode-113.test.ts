import { pathSum } from './leetcode-113';
import { createTree } from '@1d1s/lib';

describe('2022-09-24 LeetCode 1680', () => {
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
