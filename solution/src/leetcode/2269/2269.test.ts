import { divisorSubstrings } from './2269';

describe('LeetCode 2269', () => {
  test('Example 1', () => {
    expect(divisorSubstrings(240, 2)).toBe(2);
  });
  test('Example 2', () => {
    expect(divisorSubstrings(430043, 2)).toBe(2);
  });
});
