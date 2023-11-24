import { replaceElements } from './leetcode-1299';

describe('2023-11-24: LeetCode 1299', () => {
  test('Example 1', () => {
    expect(replaceElements([17, 18, 5, 4, 6, 1])).toEqual([18, 6, 6, 6, 1, -1]);
  });
  test('Example 2', () => {
    expect(replaceElements([400])).toEqual([-1]);
  });
});
