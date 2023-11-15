import { chooseHikingCourse } from './programmers-118669';

describe('2023-11-14: Programmers 118669', () => {
  test('Example 1', () => {
    expect(
      chooseHikingCourse(
        6,
        [
          [1, 2, 3],
          [2, 3, 5],
          [2, 4, 2],
          [2, 5, 4],
          [3, 4, 4],
          [4, 5, 3],
          [4, 6, 1],
          [5, 6, 1],
        ],
        [1, 3],
        [5],
      ),
    ).toEqual([5, 3]);
  });
  test('Example 2', () => {
    expect(
      chooseHikingCourse(
        7,
        [
          [1, 4, 4],
          [1, 6, 1],
          [1, 7, 3],
          [2, 5, 2],
          [3, 7, 4],
          [5, 6, 6],
        ],
        [1],
        [2, 3, 4],
      ),
    ).toEqual([3, 4]);
  });
  test('Example 3', () => {
    expect(
      chooseHikingCourse(
        7,
        [
          [1, 2, 5],
          [1, 4, 1],
          [2, 3, 1],
          [2, 6, 7],
          [4, 5, 1],
          [5, 6, 1],
          [6, 7, 1],
        ],
        [3, 7],
        [1, 5],
      ),
    ).toEqual([5, 1]);
  });
  test('Example 4', () => {
    expect(
      chooseHikingCourse(
        5,
        [
          [1, 3, 10],
          [1, 4, 20],
          [2, 3, 4],
          [2, 4, 6],
          [3, 5, 20],
          [4, 5, 6],
        ],
        [1, 2],
        [5],
      ),
    ).toEqual([5, 6]);
  });
});
