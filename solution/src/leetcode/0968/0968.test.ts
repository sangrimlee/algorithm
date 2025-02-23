import { createTree } from '@algorithm/lib';
import { minCameraCover } from './0968';

describe('LeetCode 0968', () => {
  test('Example 1', () => {
    expect(minCameraCover(createTree([0, 0, null, 0, 0]))).toBe(1);
  });

  test('Example 2', () => {
    expect(minCameraCover(createTree([0, 0, null, 0, null, 0, null, null, 0]))).toBe(2);
  });
});
