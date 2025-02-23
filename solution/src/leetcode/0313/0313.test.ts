import { nthSuperUglyNumber } from './0313';

describe('LeetCode 0313', () => {
  test('Example 1', () => {
    expect(nthSuperUglyNumber(12, [2, 7, 13, 19])).toBe(32);
  });
  test('Example 2', () => {
    expect(nthSuperUglyNumber(1, [2, 3, 5])).toBe(1);
  });
});
