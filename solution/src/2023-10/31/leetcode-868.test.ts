import { binaryGap } from './leetcode-868';

describe('2023-10-31: LeetCode 868', () => {
  test('Example 1', () => {
    expect(binaryGap(22)).toBe(2);
  });
  test('Example 2', () => {
    expect(binaryGap(8)).toBe(0);
  });
  test('Example 3', () => {
    expect(binaryGap(5)).toBe(2);
  });
});
