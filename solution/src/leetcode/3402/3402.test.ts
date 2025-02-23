import { minimumOperations } from './3402';

describe('LeetCode 3402', () => {
  test('Example 1', () => {
    expect(
      minimumOperations([
        [3, 2],
        [1, 3],
        [3, 4],
        [0, 1],
      ]),
    ).toBe(15);
  });
  test('Example 2', () => {
    expect(
      minimumOperations([
        [3, 2, 1],
        [2, 1, 0],
        [1, 2, 3],
      ]),
    ).toBe(12);
  });
});
