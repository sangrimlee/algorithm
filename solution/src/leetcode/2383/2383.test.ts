import { minNumberOfHours } from './2383';

describe('LeetCode 2383', () => {
  test('Example 1', () => {
    expect(minNumberOfHours(5, 3, [1, 4, 3, 2], [2, 6, 3, 1])).toBe(8);
  });
  test('Example 2', () => {
    expect(minNumberOfHours(2, 4, [1], [3])).toBe(0);
  });
});
