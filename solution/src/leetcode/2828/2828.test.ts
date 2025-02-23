import { isAcronym } from './2828';

describe('LeetCode 2828', () => {
  test('Example 1', () => {
    expect(isAcronym(['alice', 'bob', 'charlie'], 'abc')).toBe(true);
  });
  test('Example 2', () => {
    expect(isAcronym(['an', 'apple'], 'a')).toBe(false);
  });
  test('Example 3', () => {
    expect(isAcronym(['never', 'gonna', 'give', 'up', 'on', 'you'], 'ngguoy')).toBe(true);
  });
});
