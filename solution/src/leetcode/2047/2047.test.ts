import { countValidWords } from './2047';

describe('LeetCode 2047', () => {
  test('Example 1', () => {
    expect(countValidWords('cat and  dog')).toBe(3);
  });
  test('Example 2', () => {
    expect(countValidWords('!this  1-s b8d!')).toBe(0);
  });
  test('Example 3', () => {
    expect(countValidWords('alice and  bob are playing stone-game10')).toBe(5);
  });
});
