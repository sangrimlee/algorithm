import { mostCommonWord } from './0819';

describe('LeetCode 0819', () => {
  test('Example 1', () => {
    expect(mostCommonWord('Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'])).toBe(
      'ball',
    );
  });
  test('Example 2', () => {
    expect(mostCommonWord('a.', [])).toBe('a');
  });

  test('Example 3', () => {
    expect(mostCommonWord('a, a, a, a, b,b,b,c, c', ['a'])).toBe('b');
  });
});
