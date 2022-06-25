import { checkPossibility } from './leetcode-665';

describe('2022-06-25: LeetCode 665', () => {
  test('Example 1', () => {
    expect(checkPossibility([4, 2, 3])).toBeTruthy();
  });

  test('Example 2', () => {
    expect(checkPossibility([4, 2, 1])).toBeFalsy();
  });
});
