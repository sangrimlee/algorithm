import { wiggleMaxLength } from './leetcode-376';

describe('2022-07-03: LeetCode 376', () => {
  test('Example 1', () => {
    expect(wiggleMaxLength([1, 7, 4, 9, 2, 5])).toBe(6);
  });

  test('Example 2', () => {
    expect(wiggleMaxLength([1, 17, 5, 10, 13, 15, 10, 5, 16, 8])).toBe(7);
  });

  test('Example 3', () => {
    expect(wiggleMaxLength([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(2);
  });

  test('Example 4', () => {
    expect(wiggleMaxLength([3, 3, 3, 2, 5])).toBe(3);
  });
});
