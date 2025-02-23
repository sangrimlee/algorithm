import { findSubarrays } from './2395';

describe('LeetCode 2395', () => {
  test('Example 1', () => {
    expect(findSubarrays([4, 2, 4])).toBe(true);
  });
  test('Example 2', () => {
    expect(findSubarrays([1, 2, 3, 4, 5])).toBe(false);
  });
  test('Example 3', () => {
    expect(findSubarrays([0, 0, 0])).toBe(true);
  });
});
