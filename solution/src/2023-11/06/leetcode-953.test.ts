import { isAlienSorted } from './leetcode-953';

describe('2023-11-06: LeetCode 953', () => {
  test('Example 1', () => {
    expect(isAlienSorted(['hello', 'leetcode'], 'hlabcdefgijkmnopqrstuvwxyz')).toBe(true);
  });
  test('Example 2', () => {
    expect(isAlienSorted(['word', 'world', 'row'], 'worldabcefghijkmnpqstuvxyz')).toBe(false);
  });
  test('Example 3', () => {
    expect(isAlienSorted(['apple', 'app'], 'abcdefghijklmnopqrstuvwxyz')).toBe(false);
  });
  test('Example 4', () => {
    expect(isAlienSorted(['kuvp', 'q'], 'ngxlkthsjuoqcpavbfdermiywz')).toBe(true);
  });
});
