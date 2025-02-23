import { minimumMoves } from './2027';

describe('LeetCode 2027', () => {
  test('Example 1', () => {
    expect(minimumMoves('XXX')).toBe(1);
  });
  test('Example 2', () => {
    expect(minimumMoves('XXOX')).toBe(2);
  });
  test('Example 3', () => {
    expect(minimumMoves('OOOO')).toBe(0);
  });
});
