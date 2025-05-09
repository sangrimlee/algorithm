import { minKBitFlips } from './0995';

describe('LeetCode 0995', () => {
  test('Example 1', () => {
    expect(minKBitFlips([0, 1, 0], 1)).toBe(2);
  });
  test('Example 2', () => {
    expect(minKBitFlips([1, 1, 0], 2)).toBe(-1);
  });
  test('Example 3', () => {
    expect(minKBitFlips([0, 0, 0, 1, 0, 1, 1, 0], 3)).toBe(3);
  });
});
