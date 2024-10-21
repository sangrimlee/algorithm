import { createTree } from '@algorithm/lib';
import { minDepth } from './leetcode-111';

describe('2023-07-10: LeetCode 111', () => {
  test('Example 1', () => {
    expect(minDepth(createTree([3, 9, 20, null, null, 15, 7]))).toEqual(2);
  });
  test('Example 2', () => {
    expect(minDepth(createTree([2, null, 3, null, 4, null, 5, null, 6]))).toEqual(5);
  });
});
