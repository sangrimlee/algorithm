import { countGood } from './2537';

describe('LeetCode 2537', () => {
  test('Example 1', () => {
    expect(countGood([1, 1, 1, 1, 1], 10)).toBe(1);
  });
  test('Example 2', () => {
    expect(countGood([3, 1, 4, 3, 2, 2, 4], 2)).toBe(4);
  });
});
