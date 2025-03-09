import { lenLongestFibSubseq } from './0873';

describe('LeetCode 0872', () => {
  test('Example 1', () => {
    expect(lenLongestFibSubseq([1, 2, 3, 4, 5, 6, 7, 8])).toBe(5);
  });

  test('Example 2', () => {
    expect(lenLongestFibSubseq([1, 3, 7, 11, 12, 14, 18])).toBe(3);
  });
});
