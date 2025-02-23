import { largestIsland } from './0827';

describe('LeetCode 0827', () => {
  test('Example 1', () => {
    expect(
      largestIsland([
        [1, 0],
        [0, 1],
      ]),
    ).toBe(3);
  });
  test('Example 2', () => {
    expect(
      largestIsland([
        [1, 1],
        [1, 0],
      ]),
    ).toBe(4);
  });
  test('Example 3', () => {
    expect(
      largestIsland([
        [1, 1],
        [1, 1],
      ]),
    ).toBe(4);
  });
});
