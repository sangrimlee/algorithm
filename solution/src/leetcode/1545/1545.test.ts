import { findKthBit } from './1545';

describe('LeetCode 1545', () => {
  test('Example 1', () => {
    expect(findKthBit(3, 1)).toBe('0');
  });
  test('Example 2', () => {
    expect(findKthBit(4, 11)).toBe('1');
  });
});
