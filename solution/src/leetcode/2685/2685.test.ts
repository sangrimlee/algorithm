import { countCompleteComponents } from './2685';

describe('LeetCode 2685', () => {
  test('Example 1', () => {
    expect(
      countCompleteComponents(6, [
        [0, 1],
        [0, 2],
        [1, 2],
        [3, 4],
      ]),
    ).toBe(3);
  });
  test('Example 2', () => {
    expect(
      countCompleteComponents(6, [
        [0, 1],
        [0, 2],
        [1, 2],
        [3, 4],
        [3, 5],
      ]),
    ).toBe(1);
  });
});
