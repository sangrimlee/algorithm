import { shortestToChar } from './leetcode-821';

describe('2023-10-28: LeetCode 821', () => {
  test('Example 1', () => {
    expect(shortestToChar('loveleetcode', 'e')).toEqual([3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]);
  });
  test('Example 2', () => {
    expect(shortestToChar('aaab', 'b')).toEqual([3, 2, 1, 0]);
  });
});
