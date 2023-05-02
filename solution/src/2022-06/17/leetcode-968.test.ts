import { createTree } from '@algorithm/lib';
import { minCameraCover } from './leetcode-968';

describe('2022-06-17: LeetCode 968', () => {
  test('Example 1', () => {
    expect(minCameraCover(createTree([null]))).toBe(0);
  });

  test('Example 2', () => {
    expect(minCameraCover(createTree([0]))).toBe(1);
  });

  test('Example 3', () => {
    expect(minCameraCover(createTree([0, 0, null, 0, 0]))).toBe(1);
  });

  test('Example 4', () => {
    expect(minCameraCover(createTree([0, 0, null, 0, null, 0, null, null, 0]))).toBe(2);
  });
});
