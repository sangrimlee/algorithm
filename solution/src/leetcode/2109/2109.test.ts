import { addSpaces } from './2109';

describe('LeetCode 2109', () => {
  test('Example 1', () => {
    expect(addSpaces('LeetcodeHelpsMeLearn', [8, 13, 15])).toBe('Leetcode Helps Me Learn');
  });
  test('Example 2', () => {
    expect(addSpaces('icodeinpython', [1, 5, 7, 9])).toBe('i code in py thon');
  });
  test('Example 3', () => {
    expect(addSpaces('spacing', [0, 1, 2, 3, 4, 5, 6])).toBe(' s p a c i n g');
  });
});
