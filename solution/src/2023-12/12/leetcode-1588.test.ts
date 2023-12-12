import { sumOddLengthSubarrays } from './leetcode-1588';

describe('2023-12-12: LeetCode 1588', () => {
  test('Example 1', () => {
    expect(sumOddLengthSubarrays([1, 4, 2, 5, 3])).toBe(58);
  });
  test('Example 2', () => {
    expect(sumOddLengthSubarrays([1, 2])).toBe(3);
  });
  test('Example 3', () => {
    expect(sumOddLengthSubarrays([10, 11, 12])).toBe(66);
  });
});
