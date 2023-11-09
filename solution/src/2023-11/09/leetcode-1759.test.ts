import { countHomogenous } from './leetcode-1759';

describe('2023-11-09: LeetCode 1759', () => {
  test('Example 1', () => {
    expect(countHomogenous('abbcccaa')).toBe(13);
  });
  test('Example 2', () => {
    expect(countHomogenous('xy')).toBe(2);
  });
  test('Example 3', () => {
    expect(countHomogenous('zzzzz')).toBe(15);
  });
});
