import { maximumScore } from './2818';

describe('LeetCode 2818', () => {
  test('Example 1', () => {
    expect(maximumScore([8, 3, 9, 3, 8], 2)).toBe(81);
  });
  test('Example 2', () => {
    expect(maximumScore([19, 12, 14, 6, 10, 18], 3)).toBe(4788);
  });
  test('Example 3', () => {
    expect(maximumScore([2, 1, 14, 5, 18, 1, 8, 5], 34)).toBe(799392504);
  });
  test('Example 4', () => {
    expect(maximumScore([5, 12, 11, 15, 10, 18], 18)).toBe(557423913);
  });
});
