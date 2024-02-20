import { percentageLetter } from './leetcode-2278';

describe('2024-02-20: LeetCode 2278', () => {
  test('Example 1', () => {
    expect(percentageLetter('foobar', 'o')).toBe(33);
  });
  test('Example 2', () => {
    expect(percentageLetter('jjjj', 'k')).toBe(0);
  });
});
