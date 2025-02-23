import { largeGroupPositions } from './0830';

describe('LeetCode 0830', () => {
  test('Example 1', () => {
    expect(largeGroupPositions('abbxxxxzzy')).toEqual([[3, 6]]);
  });
  test('Example 2', () => {
    expect(largeGroupPositions('abc')).toEqual([]);
  });
  test('Example 3', () => {
    expect(largeGroupPositions('abcdddeeeeaabbbcd')).toEqual([
      [3, 5],
      [6, 9],
      [12, 14],
    ]);
  });
  test('Example 4', () => {
    expect(largeGroupPositions('abcdddeeeeaabbbcdddd')).toEqual([
      [3, 5],
      [6, 9],
      [12, 14],
      [16, 19],
    ]);
  });
  test('Example 5', () => {
    expect(largeGroupPositions('aaa')).toEqual([[0, 2]]);
  });
});
