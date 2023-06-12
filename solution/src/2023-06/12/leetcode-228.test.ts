import { summaryRanges } from './leetcode-228';

describe('2023-06-12: LeetCode 228', () => {
  test('Example 1', () => {
    expect(summaryRanges([0, 1, 2, 4, 5, 7])).toEqual(['0->2', '4->5', '7']);
  });
  test('Example 2', () => {
    expect(summaryRanges([0, 2, 3, 4, 6, 8, 9])).toEqual(['0', '2->4', '6', '8->9']);
  });
  test('Example 3', () => {
    expect(summaryRanges([])).toEqual([]);
  });
});
