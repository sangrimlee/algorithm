import { deleteGreatestValue } from './leetcode-2500';

describe('2023-06-13: LeetCode 2500', () => {
  test('Example 1', () => {
    expect(
      deleteGreatestValue([
        [1, 2, 4],
        [3, 3, 1],
      ]),
    ).toEqual(8);
  });
  test('Example 2', () => {
    expect(deleteGreatestValue([[10]])).toEqual(10);
  });
});
