import { createTree } from '@algorithm/lib';
import { getMinimumDifference } from './0530';

describe('LeetCode 0530', () => {
  test('Example 1', () => {
    const root = createTree([4, 2, 6, 1, 3]);
    expect(getMinimumDifference(root)).toBe(1);
  });
  test('Example 2', () => {
    const root = createTree([1, 0, 48, null, null, 12, 49]);
    expect(getMinimumDifference(root)).toBe(1);
  });
});
