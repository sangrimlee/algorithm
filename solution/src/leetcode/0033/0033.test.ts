import { search } from './0033';

describe('LeetCode 0033', () => {
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
