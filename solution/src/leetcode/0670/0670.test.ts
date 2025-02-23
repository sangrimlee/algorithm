import { maximumSwap } from './0670';

describe('LeetCode 0670', () => {
  test('Example 1', () => {
    expect(maximumSwap(2736)).toBe(7236);
  });
  test('Example 2', () => {
    expect(maximumSwap(9973)).toBe(9973);
  });
  test('Example 3', () => {
    expect(maximumSwap(98368)).toBe(98863);
  });
});
