import { canJump } from './0055';

describe('LeetCode 0055', () => {
  test('Example 1', () => {
    const nums = [2, 3, 1, 1, 4];
    expect(canJump(nums)).toBeTruthy();
  });

  test('Example 2', () => {
    const nums = [3, 2, 1, 0, 4];
    expect(canJump(nums)).toBeFalsy();
  });
});
