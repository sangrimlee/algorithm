import { countBadPairs } from './2364';

describe('LeetCode 2364', () => {
  test('Example 1', () => {
    expect(countBadPairs([4, 1, 3, 3])).toBe(5);
  });
  test('Example 2', () => {
    expect(countBadPairs([1, 2, 3, 4, 5])).toBe(0);
  });
});
