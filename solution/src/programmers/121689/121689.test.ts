import { expandCafe } from './121689';

describe('LeetCode 121689', () => {
  test('Example 1', () => {
    expect(expandCafe([5, 12, 30], [1, 2, 0, 1], 10)).toBe(3);
  });
  test('Example 2', () => {
    expect(expandCafe([5, 12, 30], [2, 1, 0, 0, 0, 1, 0], 10)).toBe(4);
  });
  test('Example 3', () => {
    expect(expandCafe([5], [0, 0, 0, 0, 0], 5)).toBe(1);
  });
  test('Example 4', () => {
    expect(expandCafe([5, 6, 7, 11], [1, 2, 3, 3, 2, 1, 1], 10)).toBe(2);
  });
});
