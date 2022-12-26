import { canJump } from './leetcode-55';

describe('2022-12-26: LeetCode 55', () => {
  test('Example 1', () => {
    const nums = [2, 3, 1, 1, 4];
    expect(canJump(nums)).toBeTruthy();
  });

  test('Example 2', () => {
    const nums = [3, 2, 1, 0, 4];
    expect(canJump(nums)).toBeFalsy();
  });
});
