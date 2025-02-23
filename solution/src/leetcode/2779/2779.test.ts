import { maximumBeauty } from './2779';

describe('LeetCode 2779', () => {
  test('Example 1', () => {
    expect(maximumBeauty([4, 6, 1, 2], 2)).toBe(3);
  });
  test('Example 2', () => {
    expect(maximumBeauty([1, 1, 1, 1], 10)).toBe(4);
  });
});
