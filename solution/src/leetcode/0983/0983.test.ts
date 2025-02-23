import { mincostTickets } from './0983';

describe('LeetCode 0983', () => {
  test('Example 1', () => {
    expect(mincostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15])).toBe(11);
  });
  test('Example 2', () => {
    expect(mincostTickets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31], [2, 7, 15])).toBe(17);
  });
});
