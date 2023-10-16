import { getRow } from './leetcode-119';

describe('2023-10-16: LeetCode 119', () => {
  test('Example 1', () => {
    expect(getRow(3)).toEqual([1, 3, 3, 1]);
  });
  test('Example 2', () => {
    expect(getRow(0)).toEqual([1]);
  });
  test('Example 3', () => {
    expect(getRow(1)).toEqual([1, 1]);
  });
});
