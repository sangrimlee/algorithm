import { scheduleCourse } from './leetcode-630';

describe('2022-06-23: LeetCode 630', () => {
  test('Example 1', () => {
    expect(
      scheduleCourse([
        [100, 200],
        [200, 1300],
        [1000, 1250],
        [2000, 3200],
      ]),
    ).toBe(3);
  });

  test('Example 2', () => {
    expect(scheduleCourse([[1, 2]])).toBe(1);
  });

  test('Example 3', () => {
    expect(
      scheduleCourse([
        [3, 2],
        [4, 3],
      ]),
    ).toBe(0);
  });

  test('Example 4', () => {
    expect(
      scheduleCourse([
        [1, 2],
        [2, 3],
      ]),
    ).toBe(2);
  });

  test('Example 5', () => {
    expect(
      scheduleCourse([
        [9, 10],
        [3, 12],
        [7, 17],
        [4, 18],
        [10, 19],
        [5, 20],
        [10, 20],
      ]),
    ).toBe(4);
  });
});
