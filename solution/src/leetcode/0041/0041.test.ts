import { firstMissingPositive } from './0041';

describe('LeetCode 0041', () => {
  test('Example 1', () => {
    expect(firstMissingPositive([1, 2, 0])).toBe(3);
  });
  test('Example 2', () => {
    expect(firstMissingPositive([3, 4, -1, 1])).toBe(2);
  });
  test('Example 3', () => {
    expect(firstMissingPositive([7, 8, 9, 11, 12])).toBe(1);
  });
});
