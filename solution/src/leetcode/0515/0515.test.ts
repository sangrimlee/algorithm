import { createTree } from '@algorithm/lib';
import { largestValues } from './0515';

describe('LeetCode 0515', () => {
  test('Example 1', () => {
    const root = createTree([1, 3, 2, 5, 3, null, 9]);
    expect(largestValues(root)).toEqual([1, 3, 9]);
  });
  test('Example 2', () => {
    const root = createTree([1, 2, 3]);
    expect(largestValues(root)).toEqual([1, 3]);
  });
});
