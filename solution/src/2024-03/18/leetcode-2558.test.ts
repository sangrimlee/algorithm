import { pickGifts } from './leetcode-2558';

describe('2024-03-18: LeetCode 2558', () => {
  test('Example 1', () => {
    expect(pickGifts([25, 64, 9, 4, 100], 4)).toBe(29);
  });
  test('Example 2', () => {
    expect(pickGifts([1, 1, 1, 1], 4)).toBe(4);
  });
});
