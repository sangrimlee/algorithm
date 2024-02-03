import { nthUglyNumber } from './leetcode-264';

describe('2024-02-03: LeetCode 264', () => {
  test('Example 1', () => {
    expect(nthUglyNumber(10)).toBe(12);
  });
  test('Example 2', () => {
    expect(nthUglyNumber(1)).toBe(1);
  });
});
