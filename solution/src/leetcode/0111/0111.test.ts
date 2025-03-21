import { createTree } from '@algorithm/lib';
import { minDepth } from './0111';

describe('LeetCode 0111', () => {
  test('Example 1', () => {
    expect(minDepth(createTree([3, 9, 20, null, null, 15, 7]))).toBe(2);
  });
  test('Example 2', () => {
    expect(minDepth(createTree([2, null, 3, null, 4, null, 5, null, 6]))).toBe(5);
  });
});
