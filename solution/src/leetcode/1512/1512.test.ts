import { numIdenticalPairs } from './1512';

describe('LeetCode 1512', () => {
  test('Example 1', () => {
    expect(numIdenticalPairs([1, 2, 3, 1, 1, 3])).toBe(4);
  });
  test('Example 2', () => {
    expect(numIdenticalPairs([1, 1, 1, 1])).toBe(6);
  });
  test('Example 3', () => {
    expect(numIdenticalPairs([1, 2, 3])).toBe(0);
  });
});
