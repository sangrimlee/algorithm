import { maxWidthOfVerticalArea } from './1637';

describe('LeetCode 1637', () => {
  test('Example 1', () => {
    expect(
      maxWidthOfVerticalArea([
        [8, 7],
        [9, 9],
        [7, 4],
        [9, 7],
      ]),
    ).toBe(1);
  });
  test('Example 2', () => {
    expect(
      maxWidthOfVerticalArea([
        [3, 1],
        [9, 0],
        [1, 0],
        [1, 4],
        [5, 3],
        [8, 8],
      ]),
    ).toBe(3);
  });
});
