import { subarraysWithKDistinct } from './0992';

describe('LeetCode 0992', () => {
  test('Example 1', () => {
    expect(subarraysWithKDistinct([1, 2, 1, 2, 3], 2)).toBe(7);
  });
  test('Example 2', () => {
    expect(subarraysWithKDistinct([1, 2, 1, 3, 4], 3)).toBe(3);
  });
});
