import { createTree } from '@algorithm/lib';
import { findMode } from './0501';

describe('LeetCode 0501', () => {
  test('Example 1', () => {
    expect(findMode(createTree([1, null, 2, 2]))).toEqual([2]);
  });
  test('Example 2', () => {
    expect(findMode(createTree([0]))).toEqual([0]);
  });
});
