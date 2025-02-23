import { minTimeToType } from './1974';

describe('LeetCode 1974', () => {
  test('Example 1', () => {
    expect(minTimeToType('abc')).toBe(5);
  });
  test('Example 2', () => {
    expect(minTimeToType('bza')).toBe(7);
  });
  test('Example 3', () => {
    expect(minTimeToType('zjpc')).toBe(34);
  });
});
