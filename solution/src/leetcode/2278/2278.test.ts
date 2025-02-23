import { percentageLetter } from './2278';

describe('LeetCode 2278', () => {
  test('Example 1', () => {
    expect(percentageLetter('foobar', 'o')).toBe(33);
  });
  test('Example 2', () => {
    expect(percentageLetter('jjjj', 'k')).toBe(0);
  });
});
