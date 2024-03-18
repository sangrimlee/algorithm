import { findTheArrayConcVal } from './leetcode-2562';

describe('2024-03-18: LeetCode 2562', () => {
  test('Example 1', () => {
    expect(findTheArrayConcVal([7, 52, 2, 4])).toBe(596);
  });
  test('Example 2', () => {
    expect(findTheArrayConcVal([5, 14, 13, 8, 12])).toBe(673);
  });
});
