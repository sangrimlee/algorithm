import { isHappy } from './leetcode-202';

describe('2022-12-23: Leetcode 202', () => {
  test('Example 1', () => {
    expect(isHappy(19)).toBeTruthy();
  });

  test('Example 2', () => {
    expect(isHappy(2)).toBeFalsy();
  });
});
