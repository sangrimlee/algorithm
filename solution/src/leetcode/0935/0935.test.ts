import { knightDialer } from './0935';

describe('LeetCode 0935', () => {
  test('Example 1', () => {
    expect(knightDialer(1)).toBe(10);
  });
  test('Example 2', () => {
    expect(knightDialer(2)).toBe(20);
  });
  test('Example 3', () => {
    expect(knightDialer(3131)).toBe(136006598);
  });
});
