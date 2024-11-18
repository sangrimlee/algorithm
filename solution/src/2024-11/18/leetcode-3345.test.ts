import { smallestNumber } from './leetcode-3345';

describe('2024-11-18: LeetCode 3345', () => {
  test('Example 1', () => {
    expect(smallestNumber(10, 2)).toBe(10);
  });
  test('Example 2', () => {
    expect(smallestNumber(15, 3)).toBe(16);
  });
});
