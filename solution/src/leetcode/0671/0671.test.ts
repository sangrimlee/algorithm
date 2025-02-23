import { createTree } from '@algorithm/lib';
import { findSecondMinimumValue } from './0671';

describe('LeetCode 0671', () => {
  test('Example 1', () => {
    const root = createTree([2, 2, 5, null, null, 5, 7]);
    expect(findSecondMinimumValue(root)).toBe(5);
  });
  test('Example 2', () => {
    const root = createTree([2, 2, 2]);
    expect(findSecondMinimumValue(root)).toBe(-1);
  });
});
