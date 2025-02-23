import { champagneTower } from './0799';

describe('LeetCode 0799', () => {
  test('Example 1', () => {
    expect(champagneTower(1, 1, 1)).toBe(0.0);
  });
  test('Example 2', () => {
    expect(champagneTower(2, 1, 1)).toBe(0.5);
  });
  test('Example 3', () => {
    expect(champagneTower(100000009, 33, 17)).toBe(1.0);
  });
});
