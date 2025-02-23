import { grayCode } from './0089';

describe('LeetCode 0089', () => {
  test('Example 1', () => {
    expect(grayCode(2)).toEqual([0, 1, 3, 2]);
  });
  test('Example 2', () => {
    expect(grayCode(1)).toEqual([0, 1]);
  });
});
