import { search } from './leetcode-33';

describe('2023-12-14: LeetCode 33', () => {
  test('Example 1', () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
  });
  test('Example 2', () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
  });
  test('Example 3', () => {
    expect(search([1], 0)).toBe(-1);
  });
});
