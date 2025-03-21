import { imageSmoother } from './0661';

describe('LeetCode 0661', () => {
  test('Example 1', () => {
    expect(
      imageSmoother([
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
      ]),
    ).toEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  });
  test('Example 2', () => {
    expect(
      imageSmoother([
        [100, 200, 100],
        [200, 50, 200],
        [100, 200, 100],
      ]),
    ).toEqual([
      [137, 141, 137],
      [141, 138, 141],
      [137, 141, 137],
    ]);
  });
});
