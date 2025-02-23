import { alternatingSubarray } from './2765';

describe('LeetCode 2765', () => {
  test('Example 1', () => {
    expect(alternatingSubarray([2, 3, 4, 3, 4])).toBe(4);
  });
  test('Example 2', () => {
    expect(alternatingSubarray([4, 5, 6])).toBe(2);
  });
});
