import { minFlips } from './leetcode-1529';

describe('2024-08-29: LeetCode 1529', () => {
  test('Example 1', () => {
    expect(minFlips('10111')).toBe(3);
  });
  test('Example 2', () => {
    expect(minFlips('101')).toBe(3);
  });
  test('Example 3', () => {
    expect(minFlips('00000')).toBe(0);
  });
});
