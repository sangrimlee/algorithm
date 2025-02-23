import { findScore } from './2593';

describe('LeetCode 2593', () => {
  test('Example 1', () => {
    expect(findScore([2, 1, 3, 4, 5, 2])).toBe(7);
  });
  test('Example 2', () => {
    expect(findScore([2, 3, 5, 1, 3, 2])).toBe(5);
  });
});
