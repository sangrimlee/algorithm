import { maximumCandies } from './2226';

describe('LeetCode 2226', () => {
  test('Example 1', () => {
    expect(maximumCandies([5, 8, 6], 3)).toBe(5);
  });
  test('Example 2', () => {
    expect(maximumCandies([2, 5], 11)).toBe(0);
  });
});
