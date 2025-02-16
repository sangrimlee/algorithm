import { createTree } from '@algorithm/lib';
import { smallestFromLeaf } from './leetcode-988';

describe('2024-04-17: LeetCode 988', () => {
  test('Example 1', () => {
    expect(smallestFromLeaf(createTree([0, 1, 2, 3, 4, 3, 4]))).toBe('dba');
  });
  test('Example 2', () => {
    expect(smallestFromLeaf(createTree([25, 1, 3, 1, 3, 0, 2]))).toBe('adz');
  });
  test('Example 3', () => {
    expect(smallestFromLeaf(createTree([2, 2, 1, null, 1, 0, null, 0]))).toBe('abc');
  });
});
