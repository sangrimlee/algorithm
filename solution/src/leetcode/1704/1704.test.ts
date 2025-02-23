import { halvesAreAlike } from './1704';

describe('LeetCode 1704', () => {
  test('Example 1', () => {
    const s = 'book';
    expect(halvesAreAlike(s)).toBeTruthy();
  });

  test('Example 2', () => {
    const s = 'textbook';
    expect(halvesAreAlike(s)).toBeFalsy();
  });
});
