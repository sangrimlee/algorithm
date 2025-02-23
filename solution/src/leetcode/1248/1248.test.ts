import { numberOfSubarrays } from './1248';

describe('LeetCode 1248', () => {
  test('Example 1', () => {
    expect(numberOfSubarrays([1, 1, 2, 1, 1], 3)).toBe(2);
  });
  test('Example 2', () => {
    expect(numberOfSubarrays([2, 4, 6], 1)).toBe(0);
  });
  test('Example 3', () => {
    expect(numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2)).toBe(16);
  });
});
