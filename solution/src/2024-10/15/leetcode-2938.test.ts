import { minimumSteps } from './leetcode-2938';

describe('2024-10-15: LeetCode 2938', () => {
  test('Example 1', () => {
    expect(minimumSteps('101')).toBe(1);
  });
  test('Example 2', () => {
    expect(minimumSteps('100')).toBe(2);
  });
  test('Example 3', () => {
    expect(minimumSteps('0111')).toBe(0);
  });
});
