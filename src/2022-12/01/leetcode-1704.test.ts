import { halvesAreAlike } from './leetcode-1704';

describe('2022-12-01: Leetcode 1704', () => {
  test('Example 1', () => {
    const s = 'book';
    expect(halvesAreAlike(s)).toBeTruthy();
  });

  test('Example 2', () => {
    const s = 'textbook';
    expect(halvesAreAlike(s)).toBeFalsy();
  });
});
