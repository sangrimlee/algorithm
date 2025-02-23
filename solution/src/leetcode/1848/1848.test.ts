import { getMinDistance } from './1848';

describe('LeetCode 1848', () => {
  test('Example 1', () => {
    expect(getMinDistance([1, 2, 3, 4, 5], 5, 3)).toBe(1);
  });
  test('Example 2', () => {
    expect(getMinDistance([1], 1, 0)).toBe(0);
  });
  test('Example 3', () => {
    expect(getMinDistance([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 0)).toBe(0);
  });
});
