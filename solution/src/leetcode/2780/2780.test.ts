import { minimumIndex } from './2780';

describe('LeetCode 2780', () => {
  test('Example 1', () => {
    expect(minimumIndex([1, 2, 2, 2])).toBe(2);
  });
  test('Example 2', () => {
    expect(minimumIndex([2, 1, 3, 1, 1, 1, 7, 1, 2, 1])).toBe(4);
  });
  test('Example 3', () => {
    expect(minimumIndex([3, 3, 3, 3, 7, 2, 2])).toBe(-1);
  });
  test('Example 4', () => {
    expect(minimumIndex([9, 5, 5, 1, 1, 1, 1, 8, 1])).toBe(-1);
  });
});
