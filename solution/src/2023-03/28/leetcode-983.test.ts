import { mincostTickets } from './leetcode-983';

describe('2023-03-28: LeetCode 983', () => {
  test('Example 1', () => {
    expect(mincostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15])).toEqual(11);
  });
  test('Example 2', () => {
    expect(mincostTickets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31], [2, 7, 15])).toEqual(17);
  });
});
