import { chalkReplacer } from './1894';

describe('LeetCode 1894', () => {
  test('Example 1', () => {
    expect(chalkReplacer([5, 1, 5], 22)).toBe(0);
  });
  test('Example 2', () => {
    expect(chalkReplacer([3, 4, 1, 2], 25)).toBe(1);
  });
});
