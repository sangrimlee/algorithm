import { finalPositionOfSnake } from './leetcode-3248';

describe('2024-08-13: LeetCode 3248', () => {
  test('Example 1', () => {
    expect(finalPositionOfSnake(2, ['RIGHT', 'DOWN'])).toBe(3);
  });
  test('Example 2', () => {
    expect(finalPositionOfSnake(3, ['DOWN', 'RIGHT', 'UP'])).toBe(1);
  });
});
