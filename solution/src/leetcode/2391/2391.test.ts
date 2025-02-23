import { garbageCollection } from './2391';

describe('LeetCode 2391', () => {
  test('Example 1', () => {
    expect(garbageCollection(['G', 'P', 'GP', 'GG'], [2, 4, 3])).toBe(21);
  });
  test('Example 2', () => {
    expect(garbageCollection(['MMM', 'PGM', 'GP'], [3, 10])).toBe(37);
  });
});
