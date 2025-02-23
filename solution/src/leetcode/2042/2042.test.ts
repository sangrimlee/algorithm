import { areNumbersAscending } from './2042';

describe('LeetCode 2042', () => {
  test('Example 1', () => {
    expect(areNumbersAscending('1 box has 3 blue 4 red 6 green and 12 yellow marbles')).toBe(true);
  });
  test('Example 2', () => {
    expect(areNumbersAscending('hello world 5 x 5')).toBe(false);
  });
  test('Example 3', () => {
    expect(
      areNumbersAscending('sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s'),
    ).toBe(false);
  });
});
