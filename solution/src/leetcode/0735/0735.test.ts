import { asteroidCollision } from './0735';

describe('LeetCode 0735', () => {
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
