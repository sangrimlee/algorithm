import { checkPossibility } from './0665';

describe('LeetCode 0665', () => {
  test('Example 1', () => {
    expect(checkPossibility([4, 2, 3])).toBeTruthy();
  });

  test('Example 2', () => {
    expect(checkPossibility([4, 2, 1])).toBeFalsy();
  });
});
