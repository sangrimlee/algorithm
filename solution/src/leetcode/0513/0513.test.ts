import { createTree } from '@algorithm/lib';
import { findBottomLeftValue } from './0513';

describe('LeetCode 0513', () => {
  test('Example 1', () => {
    expect(findBottomLeftValue(createTree([2, 1, 3]))).toBe(1);
  });
  test('Example 2', () => {
    expect(
      findBottomLeftValue(createTree([1, 2, 3, 4, null, 5, 6, null, null, null, null, 7])),
    ).toBe(7);
  });
});
