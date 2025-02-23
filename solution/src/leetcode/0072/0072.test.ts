import { minDistance } from './0072';

describe('LeetCode 0072', () => {
  test('Example 1', () => {
    expect(minDistance('horse', 'ros')).toBe(3);
  });
  test('Example 2', () => {
    expect(minDistance('intention', 'execution')).toBe(5);
  });
});
