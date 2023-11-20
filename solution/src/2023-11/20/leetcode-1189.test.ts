import { maxNumberOfBalloons } from './leetcode-1189';

describe('2023-11-20: LeetCode 1189', () => {
  test('Example 1', () => {
    expect(maxNumberOfBalloons('nlaebolko')).toBe(1);
  });
  test('Example 2', () => {
    expect(maxNumberOfBalloons('loonbalxballpoon')).toBe(2);
  });
  test('Example 3', () => {
    expect(maxNumberOfBalloons('leetcode')).toBe(0);
  });
});
