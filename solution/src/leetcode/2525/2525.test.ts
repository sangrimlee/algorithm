import { categorizeBox } from './2525';

describe('LeetCode 2525', () => {
  test('Example 1', () => {
    expect(categorizeBox(1000, 35, 700, 300)).toBe('Heavy');
  });
  test('Example 2', () => {
    expect(categorizeBox(200, 50, 800, 50)).toBe('Neither');
  });
});
