import { intToRoman } from './leetcode-12';

describe('2023-08-30: LeetCode 12', () => {
  test('Example 1', () => {
    expect(intToRoman(1)).toEqual('I');
  });
  test('Example 2', () => {
    expect(intToRoman(3)).toEqual('III');
  });
  test('Example 3', () => {
    expect(intToRoman(58)).toEqual('LVIII');
  });
  test('Example 4', () => {
    expect(intToRoman(1994)).toEqual('MCMXCIV');
  });
});
