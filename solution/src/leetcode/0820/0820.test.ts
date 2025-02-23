import { minimumLengthEncoding } from './0820';

describe('LeetCode 0820', () => {
  test('Example 1', () => {
    expect(minimumLengthEncoding(['time', 'me', 'bell'])).toBe(10);
  });

  test('Example 2', () => {
    expect(minimumLengthEncoding(['t'])).toBe(2);
  });

  test('Example 3', () => {
    expect(minimumLengthEncoding(['time', 'time', 'time', 'time', 'time', 'time'])).toBe(5);
  });

  test('Example 4', () => {
    expect(minimumLengthEncoding(['leetcode', 'mycode', 'code'])).toBe(16);
  });
});
