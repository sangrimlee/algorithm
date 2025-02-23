import { checkDistances } from './2399';

describe('LeetCode 2399', () => {
  test('Example 1', () => {
    expect(
      checkDistances(
        'abaccb',
        [1, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ),
    ).toBe(true);
  });
  test('Example 2', () => {
    expect(
      checkDistances(
        'aa',
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ),
    ).toBe(false);
  });
});
