import { isHappy } from './0202';

describe('LeetCode 0202', () => {
  test('Example 1', () => {
    expect(isHappy(19)).toBeTruthy();
  });

  test('Example 2', () => {
    expect(isHappy(2)).toBeFalsy();
  });
});
