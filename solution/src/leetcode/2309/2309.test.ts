import { greatestLetter } from './2309';

describe('LeetCode 2309', () => {
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
