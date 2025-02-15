import { createTree } from '@algorithm/lib';
import { minDiffInBST } from './leetcode-783';

describe('2023-10-26: LeetCode 783', () => {
  test('Example 1', () => {
    const root = createTree([4, 2, 6, 1, 3]);
    expect(minDiffInBST(root)).toBe(1);
  });
  test('Example 2', () => {
    const root = createTree([1, 0, 48, null, null, 12, 49]);
    expect(minDiffInBST(root)).toBe(1);
  });
});
