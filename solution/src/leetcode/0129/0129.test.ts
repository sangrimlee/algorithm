import { createTree } from '@algorithm/lib';
import { sumNumbers } from './0129';

describe('LeetCode 0129', () => {
  test('Example 1', () => {
    expect(sumNumbers(createTree([1, 2, 3]))).toBe(25);
  });
  test('Example 2', () => {
    expect(sumNumbers(createTree([4, 9, 0, 5, 1]))).toBe(1026);
  });
});
