import { countTestedDevices } from './2960';

describe('LeetCode 2960', () => {
  test('Example 1', () => {
    expect(countTestedDevices([1, 1, 2, 1, 3])).toBe(3);
  });
  test('Example 2', () => {
    expect(countTestedDevices([0, 1, 2])).toBe(2);
  });
});
