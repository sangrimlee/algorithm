import { maxProfitI } from './0121';

describe('LeetCode 0121', () => {
  test('Example 1', () => {
    expect(maxProfitI([7, 1, 5, 3, 6, 4])).toBe(5);
  });

  test('Example 3', () => {
    expect(maxProfitI([7, 6, 4, 3, 1])).toBe(0);
  });
});
