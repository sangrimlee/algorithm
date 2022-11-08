import { makeGood } from './leetcode-1544';

describe('2022-11-08: Leetcode 1544', () => {
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
