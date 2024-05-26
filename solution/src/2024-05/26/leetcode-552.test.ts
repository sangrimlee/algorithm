import { checkRecord } from './leetcode-552';

describe('2024-05-26: LeetCode 552', () => {
  test('Example 1', () => {
    expect(checkRecord(2)).toBe(8);
  });
  test('Example 2', () => {
    expect(checkRecord(1)).toBe(3);
  });
  test('Example 3', () => {
    expect(checkRecord(10101)).toBe(183236316);
  });
});
