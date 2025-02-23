import { minBitFlips } from './2220';

describe('LeetCode 2220', () => {
  test('Example 1', () => {
    expect(minBitFlips(10, 7)).toBe(3);
  });
  test('Example 2', () => {
    expect(minBitFlips(3, 4)).toBe(3);
  });
});
