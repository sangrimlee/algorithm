import { partitionString } from './leetcode-2405';

describe('2024-04-28: LeetCode 2405', () => {
  test('Example 1', () => {
    expect(partitionString('abacaba')).toBe(4);
  });
  test('Example 2', () => {
    expect(partitionString('ssssss')).toBe(6);
  });
});
