import { maxDifference } from './3442';

describe('LeetCode 3442', () => {
  test('Example 1', () => {
    expect(maxDifference('aaaaabbc')).toBe(3);
  });
  test('Example 2', () => {
    expect(maxDifference('abcabcab')).toBe(1);
  });
});
