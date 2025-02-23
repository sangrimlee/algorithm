import { minOperations } from './1758';

describe('LeetCode 1758', () => {
  test('Example 1', () => {
    expect(minOperations('0100')).toBe(1);
  });
  test('Example 2', () => {
    expect(minOperations('10')).toBe(0);
  });
  test('Example 3', () => {
    expect(minOperations('1111')).toBe(2);
  });
});
