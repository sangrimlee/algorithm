import { deleteGreatestValue } from './2500';

describe('LeetCode 2500', () => {
  test('Example 1', () => {
    expect(
      deleteGreatestValue([
        [1, 2, 4],
        [3, 3, 1],
      ]),
    ).toBe(8);
  });
  test('Example 2', () => {
    expect(deleteGreatestValue([[10]])).toBe(10);
  });
});
