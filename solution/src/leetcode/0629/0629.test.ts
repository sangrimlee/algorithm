import { kInversePairs } from './0629';

describe('LeetCode 0629', () => {
  test('Example 1', () => {
    expect(kInversePairs(3, 0)).toBe(1);
  });
  test('Example 2', () => {
    expect(kInversePairs(3, 1)).toBe(2);
  });
  test('Example 3', () => {
    expect(kInversePairs(3, 2)).toBe(2);
  });
  test('Example 4', () => {
    expect(kInversePairs(1000, 1000)).toBe(663677020);
  });
});
