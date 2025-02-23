import { minMoves2 } from './0462';

describe('LeetCode 0462', () => {
  test('Example 1', () => {
    expect(minMoves2([1, 2, 3])).toBe(2);
  });

  test('Example 2', () => {
    expect(minMoves2([1, 10, 2, 9])).toBe(16);
  });
});
