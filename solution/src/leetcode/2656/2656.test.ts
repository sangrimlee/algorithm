import { maximizeSum } from './2656';

describe('LeetCode 2656', () => {
  test('Example 1', () => {
    expect(maximizeSum([1, 2, 3, 4, 5], 3)).toBe(18);
  });
  test('Example 2', () => {
    expect(maximizeSum([5, 5, 5], 2)).toBe(11);
  });
});
