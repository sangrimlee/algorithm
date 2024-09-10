import { createTree } from '@algorithm/lib';
import { goodNodes } from './leetcode-1448';

describe('2024-09-10: LeetCode 1448', () => {
  test('Example 1', () => {
    expect(goodNodes(createTree([3, 1, 4, 3, null, 1, 5]))).toBe(4);
  });
  test('Example 2', () => {
    expect(goodNodes(createTree([3, 3, null, 4, 2]))).toBe(3);
  });
  test('Example 3', () => {
    expect(goodNodes(createTree([1]))).toBe(1);
  });
});
