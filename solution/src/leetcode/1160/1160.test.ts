import { countCharacters } from './1160';

describe('LeetCode 1160', () => {
  test('Example 1', () => {
    expect(countCharacters(['cat', 'bt', 'hat', 'tree'], 'atach')).toBe(6);
  });
  test('Example 2', () => {
    expect(countCharacters(['hello', 'world', 'leetcode'], 'welldonehoneyr')).toBe(10);
  });
});
