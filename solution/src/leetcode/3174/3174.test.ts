import { clearDigits } from './3174';

describe('LeetCode 3174', () => {
  test('Example 1', () => {
    expect(clearDigits('abc')).toBe('abc');
  });

  test('Example 2', () => {
    expect(clearDigits('cb34')).toBe('');
  });
});
