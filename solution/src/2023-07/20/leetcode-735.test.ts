import { asteroidCollision } from './leetcode-735';

describe('2023-07-20: LeetCode 735', () => {
  test('Example 1', () => {
    expect(asteroidCollision([5, 10, -5])).toEqual([5, 10]);
  });
  test('Example 2', () => {
    expect(asteroidCollision([8, -8])).toEqual([]);
  });
  test('Example 3', () => {
    expect(asteroidCollision([10, 2, -5])).toEqual([10]);
  });
});
