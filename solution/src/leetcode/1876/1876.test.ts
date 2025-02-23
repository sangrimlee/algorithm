import { countGoodSubstrings } from './1876';

describe('LeetCode 1876', () => {
  test('Example 1', () => {
    expect(countGoodSubstrings('xyzzaz')).toBe(1);
  });
  test('Example 2', () => {
    expect(countGoodSubstrings('aababcabc')).toBe(4);
  });
});
