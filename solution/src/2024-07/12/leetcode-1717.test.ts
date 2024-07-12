import { maximumGain } from './leetcode-1717';

describe('2024-07-12: LeetCode 1717', () => {
  test('Example 1', () => {
    expect(maximumGain('cdbcbbaaabab', 4, 5)).toBe(19);
  });
  test('Example 2', () => {
    expect(maximumGain('aabbaaxybbaabb', 5, 4)).toBe(20);
  });
});
