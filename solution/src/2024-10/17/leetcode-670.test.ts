import { maximumSwap } from './leetcode-670';

describe('2024-10-17: LeetCode 670', () => {
  test('Example 1', () => {
    expect(maximumSwap(2736)).toEqual(7236);
  });
  test('Example 2', () => {
    expect(maximumSwap(9973)).toEqual(9973);
  });
  test('Example 3', () => {
    expect(maximumSwap(98368)).toEqual(98863);
  });
});
