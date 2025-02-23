import { freqAlphabets } from './1309';

describe('LeetCode 1309', () => {
  test('Example 1', () => {
    expect(freqAlphabets('10#11#12')).toBe('jkab');
  });
  test('Example 2', () => {
    expect(freqAlphabets('1326#')).toBe('acz');
  });
});
