import { countPairs } from './2176';

describe('LeetCode 2176', () => {
  test('Example 1', () => {
    expect(countPairs([3, 1, 2, 2, 2, 1, 3], 2)).toBe(4);
  });
  test('Example 2', () => {
    expect(countPairs([1, 2, 3, 4], 1)).toBe(0);
  });
});
