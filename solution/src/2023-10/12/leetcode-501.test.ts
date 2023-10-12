import { createTree } from '@algorithm/lib';
import { findMode } from './leetcode-501';

describe('2023-10-12: LeetCode 501', () => {
  test('Example 1', () => {
    expect(findMode(createTree([1, null, 2, null, null, 2]))).toEqual([2]);
  });
  test('Example 2', () => {
    expect(findMode(createTree([0]))).toEqual([0]);
  });
});
