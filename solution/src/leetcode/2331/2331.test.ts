import { createTree } from '@algorithm/lib';
import { evaluateTree } from './2331';

describe('LeetCode 2331', () => {
  test('Example 1', () => {
    expect(evaluateTree(createTree([2, 1, 3, null, null, 0, 1]))).toBe(true);
  });
  test('Example 2', () => {
    expect(evaluateTree(createTree([0]))).toBe(false);
  });
});
