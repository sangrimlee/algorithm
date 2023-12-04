import { largestGoodInteger } from './leetcode-2264';

describe('2023-12-04: LeetCode 2264', () => {
  test('Example 1', () => {
    expect(largestGoodInteger('6777133339')).toBe('777');
  });
  test('Example 2', () => {
    expect(largestGoodInteger('2300019')).toBe('000');
  });
  test('Example 3', () => {
    expect(largestGoodInteger('42352338')).toBe('');
  });
  test('Example 4', () => {
    expect(largestGoodInteger('222')).toBe('222');
  });
  test('Example 5', () => {
    expect(largestGoodInteger('3200014888')).toBe('888');
  });
});
