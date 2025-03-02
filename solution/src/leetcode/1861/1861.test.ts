import { rotateTheBox } from './1861';

describe('LeetCode 1861', () => {
  test('Example 1', () => {
    expect(rotateTheBox([['#', '.', '#']])).toEqual([['.'], ['#'], ['#']]);
  });

  test('Example 2', () => {
    expect(
      rotateTheBox([
        ['#', '.', '*', '.'],
        ['#', '#', '*', '.'],
      ]),
    ).toEqual([
      ['#', '.'],
      ['#', '#'],
      ['*', '*'],
      ['.', '.'],
    ]);
  });

  test('Example 3', () => {
    expect(
      rotateTheBox([
        ['#', '#', '*', '.', '*', '.'],
        ['#', '#', '#', '*', '.', '.'],
        ['#', '#', '#', '.', '#', '.'],
      ]),
    ).toEqual([
      ['.', '#', '#'],
      ['.', '#', '#'],
      ['#', '#', '*'],
      ['#', '*', '.'],
      ['#', '.', '*'],
      ['#', '.', '.'],
    ]);
  });
});
