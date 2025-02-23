import { sumSubarrayMins } from './0907';

describe('LeetCode 0907', () => {
  test('Example 1', () => {
    const arr = [3, 1, 2, 4];
    expect(sumSubarrayMins(arr)).toBe(17);
  });

  test('Example 2', () => {
    const arr = [11, 81, 94, 43, 3];
    expect(sumSubarrayMins(arr)).toBe(444);
  });
});
