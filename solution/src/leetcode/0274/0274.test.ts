import { hIndex } from './0274';

describe('LeetCode 0274', () => {
  test('Example 1', () => {
    expect(hIndex([3, 0, 6, 1, 5])).toBe(3);
  });
  test('Example 2', () => {
    expect(hIndex([1, 3, 1])).toBe(1);
  });
});
