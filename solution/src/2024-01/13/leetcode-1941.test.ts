import { areOccurrencesEqual } from './leetcode-1941';

describe('2024-01-13: LeetCode 1941', () => {
  test('Example 1', () => {
    expect(areOccurrencesEqual('abacbc')).toBe(true);
  });
  test('Example 2', () => {
    expect(areOccurrencesEqual('aaabb')).toBe(false);
  });
});
