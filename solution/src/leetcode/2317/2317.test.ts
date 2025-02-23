import { maximumXOR } from './2317';

describe('LeetCode 2317', () => {
  test('Example 1', () => {
    expect(maximumXOR([3, 2, 4, 6])).toBe(7);
  });
  test('Example 2', () => {
    expect(maximumXOR([1, 2, 3, 9, 2])).toBe(11);
  });
});
