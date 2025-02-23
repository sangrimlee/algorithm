import { treasureMap } from './121690';

describe('LeetCode 121690', () => {
  test('Example 1', () => {
    expect(
      treasureMap(4, 4, [
        [2, 3],
        [3, 3],
      ]),
    ).toBe(5);
  });
  test('Example 2', () => {
    expect(
      treasureMap(5, 4, [
        [1, 4],
        [2, 1],
        [2, 2],
        [2, 3],
        [2, 4],
        [3, 3],
        [4, 1],
        [4, 3],
        [5, 3],
      ]),
    ).toBe(-1);
  });
});
