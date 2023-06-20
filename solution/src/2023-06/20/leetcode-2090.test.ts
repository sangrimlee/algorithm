import { getAverages } from './leetcode-2090';

describe('2023-06-20: LeetCode 2090', () => {
  test('Example 1', () => {
    expect(getAverages([7, 4, 3, 9, 1, 8, 5, 2, 6], 3)).toEqual([-1, -1, -1, 5, 4, 4, -1, -1, -1]);
  });
  test('Example 2', () => {
    expect(getAverages([100000], 0)).toEqual([100000]);
  });
  test('Example 3', () => {
    expect(getAverages([8], 100000)).toEqual([-1]);
  });
});
