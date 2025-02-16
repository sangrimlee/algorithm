import { createTree } from '@algorithm/lib';
import { findSecondMinimumValue } from './leetcode-671';

describe('2023-10-21: LeetCode 671', () => {
  test('Example 1', () => {
    const root = createTree([2, 2, 5, null, null, 5, 7]);
    expect(findSecondMinimumValue(root)).toBe(5);
  });
  test('Example 2', () => {
    const root = createTree([2, 2, 2]);
    expect(findSecondMinimumValue(root)).toBe(-1);
  });
});
