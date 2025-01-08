import { countPrefixSuffixPairs } from './leetcode-3045';

describe('2025-01-08: LeetCode 3045', () => {
  test('Example 1', () => {
    expect(countPrefixSuffixPairs(['a', 'aba', 'ababa', 'aa'])).toBe(4);
  });
  test('Example 2', () => {
    expect(countPrefixSuffixPairs(['pa', 'papa', 'ma', 'mama'])).toBe(2);
  });
  test('Example 3', () => {
    expect(countPrefixSuffixPairs(['abab', 'ab'])).toBe(0);
  });
  test('Example 4', () => {
    expect(countPrefixSuffixPairs(['aaa', 'aaa', 'aaa'])).toBe(3);
  });
  test('Example 5', () => {
    expect(countPrefixSuffixPairs(['a', 'aa', 'aa', 'b', 'ab'])).toBe(3);
  });
});
