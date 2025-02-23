import { finalPositionOfSnake } from './3248';

describe('LeetCode 3248', () => {
  test('Example 1', () => {
    expect(finalPositionOfSnake(2, ['RIGHT', 'DOWN'])).toBe(3);
  });
  test('Example 2', () => {
    expect(finalPositionOfSnake(3, ['DOWN', 'RIGHT', 'UP'])).toBe(1);
  });
});
