import { findSpecialInteger } from './1287';

describe('LeetCode 1287', () => {
  test('Example 1', () => {
    expect(findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10])).toBe(6);
  });
  test('Example 2', () => {
    expect(findSpecialInteger([1, 1])).toBe(1);
  });
});
