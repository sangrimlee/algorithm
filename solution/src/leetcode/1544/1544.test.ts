import { makeGood } from './1544';

describe('LeetCode 1544', () => {
  test('Example 1', () => {
    const s = 'leEeetcode';
    expect(makeGood(s)).toBe('leetcode');
  });

  test('Example 2', () => {
    const s = 'abBAcC';
    expect(makeGood(s)).toBe('');
  });

  test('Example 3', () => {
    const s = 's';
    expect(makeGood(s)).toBe('s');
  });
});
