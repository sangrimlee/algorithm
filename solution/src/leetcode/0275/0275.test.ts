import { hIndex } from './0275';

describe('LeetCode 0275', () => {
  test('Example 1', () => {
    expect(hIndex([0, 1, 3, 5, 6])).toBe(3);
  });
  test('Example 2', () => {
    expect(hIndex([1, 2, 100])).toBe(2);
  });
});
