import { createTree } from '@algorithm/lib';
import { isUnivalTree } from './0965';

describe('LeetCode 0965', () => {
  test('Example 1', () => {
    expect(isUnivalTree(createTree([1, 1, 1, 1, 1, null, 1]))).toBe(true);
  });
  test('Example 2', () => {
    expect(isUnivalTree(createTree([2, 2, 2, 5, 2]))).toBe(false);
  });
});
