import { createTree } from '@algorithm/lib';
import { getDirections } from './leetcode-2096';

describe('2024-07-16: LeetCode 2096', () => {
  test('Example 1', () => {
    expect(getDirections(createTree([5, 1, 2, 3, null, 6, 4]), 3, 6)).toBe('UURL');
  });
  test('Example 2', () => {
    expect(getDirections(createTree([2, 1]), 2, 1)).toBe('L');
  });
});
