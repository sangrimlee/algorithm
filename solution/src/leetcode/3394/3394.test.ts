import { checkValidCuts } from './3394';

describe('LeetCode 3394', () => {
  test('Example 1', () => {
    expect(
      checkValidCuts(5, [
        [1, 0, 5, 2],
        [0, 2, 2, 4],
        [3, 2, 5, 3],
        [0, 4, 4, 5],
      ]),
    ).toBe(true);
  });
  test('Example 2', () => {
    expect(
      checkValidCuts(4, [
        [0, 0, 1, 1],
        [2, 0, 3, 4],
        [0, 2, 2, 3],
        [3, 0, 4, 3],
      ]),
    ).toBe(true);
  });
  test('Example 3', () => {
    expect(
      checkValidCuts(4, [
        [0, 2, 2, 4],
        [1, 0, 3, 2],
        [2, 2, 3, 4],
        [3, 0, 4, 2],
        [3, 2, 4, 4],
      ]),
    ).toBe(false);
  });
});
