import { search } from './0081';

describe('LeetCode 0081', () => {
  test('Example 1', () => {
    expect(search([2, 5, 6, 0, 0, 1, 2], 0)).toBe(true);
  });
  test('Example 2', () => {
    expect(search([2, 5, 6, 0, 0, 1, 2], 3)).toBe(false);
  });
  test('Example 3', () => {
    expect(search([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1], 2)).toBe(true);
  });
});
