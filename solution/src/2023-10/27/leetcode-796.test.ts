import { rotateString } from './leetcode-796';

describe('2023-10-27: LeetCode 796', () => {
  test('Example 1', () => {
    expect(rotateString('abcde', 'cdeab')).toBe(true);
  });
  test('Example 2', () => {
    expect(rotateString('abcde', 'abced')).toBe(false);
  });
});
