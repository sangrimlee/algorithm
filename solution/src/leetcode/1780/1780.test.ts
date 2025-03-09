import { checkPowersOfThree } from './1780';

describe('LeetCode 1780', () => {
  test('Example 1', () => {
    expect(checkPowersOfThree(12)).toBe(true);
  });
  test('Example 2', () => {
    expect(checkPowersOfThree(91)).toBe(true);
  });
  test('Example 3', () => {
    expect(checkPowersOfThree(21)).toBe(false);
  });
});
