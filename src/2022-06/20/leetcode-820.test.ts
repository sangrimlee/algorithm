import { minimumLengthEncoding } from './leetcode-820';

describe('2022-06-20: LeetCode 820', () => {
  test('Example 1', () => {
    expect(minimumLengthEncoding(['time', 'me', 'bell'])).toBe(10);
  });

  test('Example 2', () => {
    expect(minimumLengthEncoding(['t'])).toBe(2);
  });

  test('Example 3', () => {
    expect(
      minimumLengthEncoding(['time', 'time', 'time', 'time', 'time', 'time'])
    ).toBe(5);
  });

  test('Example 3', () => {
    expect(minimumLengthEncoding(['leetcode', 'mycode', 'code'])).toBe(16);
  });
});
