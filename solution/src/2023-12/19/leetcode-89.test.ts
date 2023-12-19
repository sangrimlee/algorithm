import { grayCode } from './leetcode-89';

describe('2023-12-18: LeetCode 89', () => {
  test('Example 1', () => {
    expect(grayCode(2)).toEqual([0, 1, 3, 2]);
  });
  test('Example 2', () => {
    expect(grayCode(1)).toEqual([0, 1]);
  });
});
