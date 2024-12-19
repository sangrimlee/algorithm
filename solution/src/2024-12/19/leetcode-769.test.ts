import { maxChunksToSorted } from './leetcode-769';

describe('2024-12-19: LeetCode 769', () => {
  test('Example 1', () => {
    expect(maxChunksToSorted([4, 3, 2, 1, 0])).toBe(1);
  });
  test('Example 2', () => {
    expect(maxChunksToSorted([1, 0, 2, 3, 4])).toBe(4);
  });
});
