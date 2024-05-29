import { numSteps } from './leetcode-1404';

describe('2024-05-29: LeetCode 1404', () => {
  test('Example 1', () => {
    expect(numSteps('1101')).toBe(6);
  });
  test('Example 2', () => {
    expect(numSteps('10')).toBe(1);
  });
  test('Example 3', () => {
    expect(numSteps('1')).toBe(0);
  });
});
