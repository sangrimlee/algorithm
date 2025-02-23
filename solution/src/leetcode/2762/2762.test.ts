import { continuousSubarrays } from './2762';

describe('LeetCode 2762', () => {
  test('Example 1', () => {
    expect(continuousSubarrays([5, 4, 2, 4])).toBe(8);
  });
  test('Example 2', () => {
    expect(continuousSubarrays([1, 2, 3])).toBe(6);
  });
});
