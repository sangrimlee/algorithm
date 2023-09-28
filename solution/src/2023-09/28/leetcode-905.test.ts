import { sortArrayByParity } from './leetcode-905';

describe('2023-09-28: LeetCode 905', () => {
  test('Example 1', () => {
    expect(sortArrayByParity([3, 1, 2, 4])).toEqual([2, 4, 3, 1]);
  });
  test('Example 2', () => {
    expect(sortArrayByParity([0])).toEqual([0]);
  });
});
