import { hasMatch } from './3407';

describe('LeetCode 3407', () => {
  test('Example 1', () => {
    expect(hasMatch('leetcode', 'ee*e')).toBe(true);
  });
  test('Example 2', () => {
    expect(hasMatch('car', 'c*v')).toBe(false);
  });
  test('Example 3', () => {
    expect(hasMatch('luck', 'u*')).toBe(true);
  });
});
