import { findLatestTime } from './leetcode-3114';

describe('2024-05-08: LeetCode 3114', () => {
  test('Example 1', () => {
    expect(findLatestTime('1?:?4')).toBe('11:54');
  });
  test('Example 2', () => {
    expect(findLatestTime('0?:5?')).toBe('09:59');
  });
});
