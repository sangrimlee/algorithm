import { maximumStrongPairXor } from './2932';

describe('LeetCode 2932', () => {
  test('Example 1', () => {
    expect(maximumStrongPairXor([1, 2, 3, 4, 5])).toBe(7);
  });
  test('Example 2', () => {
    expect(maximumStrongPairXor([10, 100])).toBe(0);
  });
  test('Example 3', () => {
    expect(maximumStrongPairXor([5, 6, 25, 30])).toBe(7);
  });
});
