import { reformatDate } from './leetcode-1507';

describe('2023-12-06: LeetCode 1507', () => {
  test('Example 1', () => {
    expect(reformatDate('20th Oct 2052')).toBe('2052-10-20');
  });
  test('Example 2', () => {
    expect(reformatDate('6th Jun 1933')).toBe('1933-06-06');
  });
  test('Example 3', () => {
    expect(reformatDate('26th May 1960')).toBe('1960-05-26');
  });
});
