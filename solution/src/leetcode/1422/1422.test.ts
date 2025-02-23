import { maxScore } from './1422';

describe('LeetCode 1422', () => {
  test('Example 1', () => {
    expect(maxScore('011101')).toBe(5);
  });
  test('Example 2', () => {
    expect(maxScore('00111')).toBe(5);
  });
  test('Example 3', () => {
    expect(maxScore('1111')).toBe(3);
  });
});
