import { isPossible } from './leetcode-1354';

describe('2022-06-24: LeetCode 1354', () => {
  test('Example 1', () => {
    expect(isPossible([9, 3, 5])).toBeTruthy();
  });

  test('Example 2', () => {
    expect(isPossible([1, 1, 1, 2])).toBeFalsy();
  });

  test('Example 3', () => {
    expect(isPossible([8, 5])).toBeTruthy();
  });

  test('Example 4', () => {
    expect(isPossible([1, 1000000000])).toBeTruthy();
  });

  test('Example 5', () => {
    expect(isPossible([1, 1, 10])).toBeFalsy();
  });
});
