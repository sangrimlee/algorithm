import { countPrefixSuffixPairs } from './leetcode-3042';

describe('2024-05-01: LeetCode 3042', () => {
  test('Example 1', () => {
    expect(countPrefixSuffixPairs(['a', 'aba', 'ababa', 'aa'])).toBe(4);
  });
  test('Example 2', () => {
    expect(countPrefixSuffixPairs(['pa', 'papa', 'ma', 'mama'])).toBe(2);
  });
  test('Example 3', () => {
    expect(countPrefixSuffixPairs(['abab', 'ab'])).toBe(0);
  });
});
