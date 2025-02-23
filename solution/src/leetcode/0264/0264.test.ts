import { nthUglyNumber } from './0264';

describe('LeetCode 0264', () => {
  test('Example 1', () => {
    expect(nthUglyNumber(10)).toBe(12);
  });
  test('Example 2', () => {
    expect(nthUglyNumber(1)).toBe(1);
  });
});
