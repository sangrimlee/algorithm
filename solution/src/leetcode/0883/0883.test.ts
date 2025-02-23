import { projectionArea } from './0883';

describe('LeetCode 0883', () => {
  test('Example 1', () => {
    expect(
      projectionArea([
        [1, 2],
        [3, 4],
      ]),
    ).toBe(17);
  });
  test('Example 2', () => {
    expect(projectionArea([[2]])).toBe(5);
  });
  test('Example 3', () => {
    expect(
      projectionArea([
        [1, 0],
        [0, 2],
      ]),
    ).toBe(8);
  });
});
