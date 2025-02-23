import { containsPattern } from './1566';

describe('LeetCode 1566', () => {
  test('Example 1', () => {
    expect(containsPattern([1, 2, 4, 4, 4, 4], 1, 3)).toBe(true);
  });
  test('Example 2', () => {
    expect(containsPattern([1, 2, 1, 2, 1, 1, 1, 3], 2, 2)).toBe(true);
  });
  test('Example 3', () => {
    expect(containsPattern([1, 2, 1, 2, 1, 3], 2, 3)).toBe(false);
  });
});
