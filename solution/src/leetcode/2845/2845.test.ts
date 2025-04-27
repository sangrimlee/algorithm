import { countInterestingSubarrays } from './2845';

describe('LeetCode 2845', () => {
  test('Example 1', () => {
    expect(countInterestingSubarrays([3, 2, 4], 2, 1)).toBe(3);
  });
  test('Example 2', () => {
    expect(countInterestingSubarrays([3, 1, 9, 6], 3, 0)).toBe(2);
  });
});
