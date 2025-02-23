import { rearrangeCharacters } from './2287';

describe('LeetCode 2287', () => {
  test('Example 1', () => {
    expect(rearrangeCharacters('ilovecodingonleetcode', 'code')).toBe(2);
  });
  test('Example 2', () => {
    expect(rearrangeCharacters('abcba', 'abc')).toBe(1);
  });
  test('Example 3', () => {
    expect(rearrangeCharacters('abbaccaddaeea', 'aaaaa')).toBe(1);
  });
});
