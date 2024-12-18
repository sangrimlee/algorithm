import { smallestNumber } from './leetcode-3370';

describe('2024-12-18: LeetCode 3370', () => {
  test('Example 1', () => {
    expect(smallestNumber(5)).toBe(7);
  });
  test('Example 2', () => {
    expect(smallestNumber(10)).toBe(15);
  });
  test('Example 3', () => {
    expect(smallestNumber(3)).toBe(3);
  });
});
