import { rotateString } from './0796';

describe('LeetCode 0796', () => {
  test('Example 1', () => {
    expect(rotateString('abcde', 'cdeab')).toBe(true);
  });
  test('Example 2', () => {
    expect(rotateString('abcde', 'abced')).toBe(false);
  });
});
