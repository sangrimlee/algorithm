import { minIncrementForUnique } from './0945';

describe('LeetCode 0945', () => {
  test('Example 1', () => {
    expect(minIncrementForUnique([1, 2, 2])).toBe(1);
  });
  test('Example 2', () => {
    expect(minIncrementForUnique([3, 2, 1, 2, 1, 7])).toBe(6);
  });
});
