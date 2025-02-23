import { countQuadruplets } from './1995';

describe('LeetCode 1995', () => {
  test('Example 1', () => {
    expect(countQuadruplets([1, 2, 3, 6])).toBe(1);
  });
  test('Example 2', () => {
    expect(countQuadruplets([3, 3, 6, 4, 5])).toBe(0);
  });
  test('Example 3', () => {
    expect(countQuadruplets([1, 1, 1, 3, 5])).toBe(4);
  });
});
