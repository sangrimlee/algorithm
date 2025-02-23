import { satisfiesConditions } from './3142';

describe('LeetCode 3142', () => {
  test('Example 1', () => {
    expect(
      satisfiesConditions([
        [1, 0, 2],
        [1, 0, 2],
      ]),
    ).toBe(true);
  });
  test('Example 2', () => {
    expect(
      satisfiesConditions([
        [1, 1, 1],
        [0, 0, 0],
      ]),
    ).toBe(false);
  });
  test('Example 3', () => {
    expect(satisfiesConditions([[1], [2], [3]])).toBe(false);
  });
});
