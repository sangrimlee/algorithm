import { countAsterisks } from './2315';

describe('LeetCode 2315', () => {
  test('Example 1', () => {
    expect(countAsterisks('l|*e*et|c**o|*de|')).toBe(2);
  });
  test('Example 2', () => {
    expect(countAsterisks('iamprogrammer')).toBe(0);
  });
  test('Example 3', () => {
    expect(countAsterisks('yo|uar|e**|b|e***au|tifu|l')).toBe(5);
  });
});
