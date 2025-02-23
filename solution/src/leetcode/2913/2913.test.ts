import { sumCounts } from './2913';

describe('LeetCode 2913', () => {
  test('Example 1', () => {
    expect(sumCounts([1, 2, 1])).toBe(15);
  });
  test('Example 2', () => {
    expect(sumCounts([1, 1])).toBe(3);
  });
});
