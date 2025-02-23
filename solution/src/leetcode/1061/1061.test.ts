import { smallestEquivalentString } from './1061';

describe('LeetCode 1061', () => {
  test('Example 1', () => {
    const s1 = 'parker',
      s2 = 'morris',
      baseStr = 'parser';
    expect(smallestEquivalentString(s1, s2, baseStr)).toBe('makkek');
  });

  test('Example 2', () => {
    const s1 = 'hello',
      s2 = 'world',
      baseStr = 'hold';
    expect(smallestEquivalentString(s1, s2, baseStr)).toBe('hdld');
  });

  test('Example 3', () => {
    const s1 = 'leetcode',
      s2 = 'programs',
      baseStr = 'sourcecode';
    expect(smallestEquivalentString(s1, s2, baseStr)).toBe('aauaaaaada');
  });
});
