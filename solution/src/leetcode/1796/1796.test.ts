import { secondHighest } from './1796';

describe('LeetCode 1796', () => {
  test('Example 1', () => {
    expect(secondHighest('dfa12321afd')).toBe(2);
  });
  test('Example 2', () => {
    expect(secondHighest('abc1111')).toBe(-1);
  });
});
