import { maxAdjacentDistance } from './3423';

describe('LeetCode 3423', () => {
  test('Example 1', () => {
    expect(maxAdjacentDistance([1, 2, 4])).toBe(3);
  });
  test('Example 2', () => {
    expect(maxAdjacentDistance([-5, -10, -5])).toBe(5);
  });
});
