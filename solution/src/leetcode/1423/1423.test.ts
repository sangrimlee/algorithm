import { maxScore } from './1423';

describe('LeetCode 1423', () => {
  test('Example 1', () => {
    expect(maxScore([1, 2, 3, 4, 5, 6, 1], 3)).toBe(12);
  });

  test('Example 2', () => {
    expect(maxScore([2, 2, 2], 2)).toBe(4);
  });

  test('Example 3', () => {
    expect(maxScore([9, 7, 7, 9, 7, 7, 9], 7)).toBe(55);
  });
});
