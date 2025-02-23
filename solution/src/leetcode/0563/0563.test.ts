import { createTree } from '@algorithm/lib';
import { findTilt } from './0563';

describe('LeetCode 0563', () => {
  test('Example 1', () => {
    expect(findTilt(createTree([1, 2, 3]))).toBe(1);
  });
  test('Example 2', () => {
    expect(findTilt(createTree([4, 2, 9, 3, 5, null, 7]))).toBe(15);
  });
  test('Example 3', () => {
    expect(findTilt(createTree([21, 7, 14, 1, 1, 2, 2, 3, 3]))).toBe(9);
  });
});
