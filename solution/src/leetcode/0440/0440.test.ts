import { findKthNumber } from './0440';

describe('LeetCode 0440', () => {
  test('Example 1', () => {
    expect(findKthNumber(13, 2)).toBe(10);
  });
  test('Example 2', () => {
    expect(findKthNumber(1, 1)).toBe(1);
  });
});
