import { maxNumEdgesToRemove } from './1579';

describe('LeetCode 1579', () => {
  test('Example 1', () => {
    expect(
      maxNumEdgesToRemove(4, [
        [3, 1, 2],
        [3, 2, 3],
        [1, 1, 3],
        [1, 2, 4],
        [1, 1, 2],
        [2, 3, 4],
      ]),
    ).toBe(2);
  });
  test('Example 2', () => {
    expect(
      maxNumEdgesToRemove(4, [
        [3, 1, 2],
        [3, 2, 3],
        [1, 1, 4],
        [2, 1, 4],
      ]),
    ).toBe(0);
  });
  test('Example 3', () => {
    expect(
      maxNumEdgesToRemove(4, [
        [3, 2, 3],
        [1, 1, 2],
        [2, 3, 4],
      ]),
    ).toBe(-1);
  });
});
