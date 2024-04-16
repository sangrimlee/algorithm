import { maximumTripletValue } from './leetcode-2873';

describe('2024-04-15: LeetCode 2873', () => {
  test('Example 1', () => {
    expect(maximumTripletValue([12, 6, 1, 2, 7])).toBe(77);
  });
  test('Example 2', () => {
    expect(maximumTripletValue([1, 10, 3, 4, 19])).toBe(133);
  });
  test('Example 3', () => {
    expect(maximumTripletValue([1, 2, 3])).toBe(0);
  });
});
