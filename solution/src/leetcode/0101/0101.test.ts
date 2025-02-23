import { createTree } from '@algorithm/lib';

import { isSymmetricIterative, isSymmetricRecursive } from './0101';

describe('LeetCode 0101', () => {
  test('Example 1', () => {
    expect(isSymmetricIterative(createTree([1, 2, 2, 3, 4, 4, 3]))).toBeTruthy();
  });
  test('Example 2', () => {
    expect(isSymmetricIterative(createTree([1, 2, 2, null, 3, null, 3]))).toBeFalsy();
  });

  test('Example 3', () => {
    expect(isSymmetricRecursive(createTree([1, 2, 2, 3, 4, 4, 3]))).toBeTruthy();
  });
  test('Example 4', () => {
    expect(isSymmetricRecursive(createTree([1, 2, 2, null, 3, null, 3]))).toBeFalsy();
  });
});
