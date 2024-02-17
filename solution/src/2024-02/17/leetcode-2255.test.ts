import { countPrefixes } from './leetcode-2255';

describe('2024-02-17: LeetCode 2255', () => {
  test('Example 1', () => {
    expect(countPrefixes(['a', 'b', 'c', 'ab', 'bc', 'abc'], 'abc')).toBe(3);
  });
  test('Example 2', () => {
    expect(countPrefixes(['a', 'a'], 'aa')).toBe(2);
  });
});
