import { isUgly } from './leetcode-263';

describe('2022-11-18: Leetcode 263', () => {
  test('Example 1', () => {
    expect(isUgly(6)).toBeTruthy();
  });

  test('Example 2', () => {
    expect(isUgly(1)).toBeTruthy();
  });

  test('Example 3', () => {
    expect(isUgly(14)).toBeFalsy();
  });

  test('Example 4', () => {
    expect(isUgly(8)).toBeTruthy();
  });
});
