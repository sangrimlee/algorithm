import { cleanUpWallpaper } from './programmers-161990';

describe('2023-03-13: Programmers 161990', () => {
  test('Example 1', () => {
    expect(cleanUpWallpaper(['.#...', '..#..', '...#.'])).toEqual([0, 1, 3, 4]);
  });
  test('Example 2', () => {
    expect(
      cleanUpWallpaper(['..........', '.....#....', '......##..', '...##.....', '....#.....']),
    ).toEqual([1, 3, 5, 8]);
  });
  test('Example 3', () => {
    expect(
      cleanUpWallpaper([
        '.##...##.',
        '#..#.#..#',
        '#...#...#',
        '.#.....#.',
        '..#...#..',
        '...#.#...',
        '....#....',
      ]),
    ).toEqual([0, 0, 7, 9]);
  });
  test('Example 4', () => {
    expect(cleanUpWallpaper(['..', '#.'])).toEqual([1, 0, 2, 1]);
  });

  test('Example 5', () => {
    expect(cleanUpWallpaper(['#.', '#.'])).toEqual([0, 0, 2, 1]);
  });
});
