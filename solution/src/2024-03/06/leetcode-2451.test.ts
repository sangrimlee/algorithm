import { oddString } from './leetcode-2451';

describe('2024-03-06: LeetCode 2451', () => {
  test('Example 1', () => {
    expect(oddString(['adc', 'wzy', 'abc'])).toBe('abc');
  });
  test('Example 2', () => {
    expect(oddString(['aaa', 'bob', 'ccc', 'ddd'])).toBe('bob');
  });
});
