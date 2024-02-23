import { greatestLetter } from './leetcode-2309';

describe('2024-02-23: LeetCode 2309', () => {
  test('Example 1', () => {
    expect(greatestLetter('lEeTcOdE')).toBe('E');
  });
  test('Example 2', () => {
    expect(greatestLetter('arRAzFif')).toBe('R');
  });
  test('Example 3', () => {
    expect(greatestLetter('AbCdEfGhIjK')).toBe('');
  });
});
