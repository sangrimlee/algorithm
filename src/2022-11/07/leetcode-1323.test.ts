import { maximum69Number } from './leetcode-1323';

describe('2022-11-07: Leetcode 1323', () => {
  test('Example 1', () => {
    expect(maximum69Number(9669)).toBe(9969);
  });

  test('Example 2', () => {
    expect(maximum69Number(9996)).toBe(9999);
  });

  test('Example 3', () => {
    expect(maximum69Number(9999)).toBe(9999);
  });
});
