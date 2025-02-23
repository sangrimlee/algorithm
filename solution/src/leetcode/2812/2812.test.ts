import { maximumSafenessFactor } from './2812';

describe('LeetCode 2812', () => {
  test('Example 1', () => {
    expect(
      maximumSafenessFactor([
        [1, 0, 0],
        [0, 0, 0],
        [0, 0, 1],
      ]),
    ).toBe(0);
  });
  test('Example 2', () => {
    expect(
      maximumSafenessFactor([
        [0, 0, 1],
        [0, 0, 0],
        [0, 0, 0],
      ]),
    ).toBe(2);
  });
  test('Example 3', () => {
    expect(
      maximumSafenessFactor([
        [0, 0, 0, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 0, 0, 0],
      ]),
    ).toBe(2);
  });
});
