import { numSubarraysWithSum } from './0930';

describe('LeetCode 0930', () => {
  test('Example 1', () => {
    expect(numSubarraysWithSum([1, 0, 1, 0, 1], 2)).toBe(4);
  });
  test('Example 2', () => {
    expect(numSubarraysWithSum([0, 0, 0, 0, 0], 0)).toBe(15);
  });
});
