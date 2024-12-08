import { maxTwoEvents } from './leetcode-2054';

describe('2024-12-08: LeetCode 2054', () => {
  test('Example 1', () => {
    expect(
      maxTwoEvents([
        [1, 3, 2],
        [4, 5, 2],
        [2, 4, 3],
      ]),
    ).toBe(4);
  });
  test('Example 2', () => {
    expect(
      maxTwoEvents([
        [1, 3, 2],
        [4, 5, 2],
        [1, 5, 5],
      ]),
    ).toBe(5);
  });
  test('Example 3', () => {
    expect(
      maxTwoEvents([
        [1, 5, 3],
        [1, 5, 1],
        [6, 6, 5],
      ]),
    ).toBe(8);
  });
});
