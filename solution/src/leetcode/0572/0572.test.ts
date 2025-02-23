import { createTree } from '@algorithm/lib';
import { isSubtree } from './0572';

describe('LeetCode 0572', () => {
  test('Example 1', () => {
    expect(isSubtree(createTree([3, 4, 5, 1, 2]), createTree([4, 1, 2]))).toBe(true);
  });
  test('Example 2', () => {
    expect(
      isSubtree(createTree([3, 4, 5, 1, 2, null, null, null, null, 0]), createTree([4, 1, 2])),
    ).toBe(false);
  });
  test('Example 3', () => {
    expect(isSubtree(createTree([1, 1]), createTree([1]))).toBe(true);
  });
  test('Example 4', () => {
    expect(isSubtree(createTree([3, 4, 5, 1, null, 2]), createTree([3, 1, 2]))).toBe(false);
  });
  test('Example 5', () => {
    expect(isSubtree(createTree([12]), createTree([2]))).toBe(false);
  });
});
