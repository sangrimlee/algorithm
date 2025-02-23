import { new21Game } from './0837';

describe('LeetCode 0837', () => {
  test('Example 1', () => {
    expect(new21Game(10, 1, 10)).toBeCloseTo(1.0);
  });
  test('Example 2', () => {
    expect(new21Game(6, 1, 10)).toBeCloseTo(0.6);
  });
  test('Example 3', () => {
    expect(new21Game(21, 17, 10)).toBeCloseTo(0.73278);
  });
});
