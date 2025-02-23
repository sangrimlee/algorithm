import { maxRunTime } from './2141';

describe('LeetCode 2141', () => {
  test('Example 1', () => {
    expect(maxRunTime(2, [3, 3, 3])).toBe(4);
  });
  test('Example 2', () => {
    expect(maxRunTime(2, [1, 1, 1, 1])).toBe(2);
  });
});
