import { freqAlphabets } from './leetcode-1309';

describe('2023-11-25: LeetCode 1309', () => {
  test('Example 1', () => {
    expect(freqAlphabets('10#11#12')).toBe('jkab');
  });
  test('Example 2', () => {
    expect(freqAlphabets('1326#')).toBe('acz');
  });
});
