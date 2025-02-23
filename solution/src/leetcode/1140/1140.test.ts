import { stoneGameII } from './1140';

describe('LeetCode 1140', () => {
  test('Example 1', () => {
    expect(stoneGameII([2, 7, 9, 4, 4])).toBe(10);
  });
  test('Example 2', () => {
    expect(stoneGameII([1, 2, 3, 4, 5, 100])).toBe(104);
  });
});
