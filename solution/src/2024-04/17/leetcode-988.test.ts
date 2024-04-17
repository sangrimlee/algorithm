import { createTree } from '@algorithm/lib';
import { smallestFromLeaf } from './leetcode-988';

describe('2024-04-17: LeetCode 988', () => {
  test('Example 1', () => {
    expect(smallestFromLeaf(createTree([0, 1, 2, 3, 4, 3, 4]))).toEqual('dba');
  });
  test('Example 2', () => {
    expect(smallestFromLeaf(createTree([25, 1, 3, 1, 3, 0, 2]))).toEqual('adz');
  });
  test('Example 3', () => {
    expect(smallestFromLeaf(createTree([2, 2, 1, null, 1, 0, null, null, null, 0]))).toEqual('abc');
  });
});
