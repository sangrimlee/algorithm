import { cherryPickup } from './1463';

describe('LeetCode 1463', () => {
  test('Example 1', () => {
    expect(
      cherryPickup([
        [3, 1, 1],
        [2, 5, 1],
        [1, 5, 5],
        [2, 1, 1],
      ]),
    ).toBe(24);
  });
  test('Example 2', () => {
    expect(
      cherryPickup([
        [1, 0, 0, 0, 0, 0, 1],
        [2, 0, 0, 0, 0, 3, 0],
        [2, 0, 9, 0, 0, 0, 0],
        [0, 3, 0, 5, 4, 0, 0],
        [1, 0, 2, 3, 0, 0, 6],
      ]),
    ).toBe(28);
  });
});
