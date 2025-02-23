import { subarraysDivByK } from './0974';

describe('LeetCode 0974', () => {
  test('Example 1', () => {
    expect(subarraysDivByK([4, 5, 0, -2, -3, 1], 5)).toBe(7);
  });
  test('Example 2', () => {
    expect(subarraysDivByK([5], 9)).toBe(0);
  });
});
