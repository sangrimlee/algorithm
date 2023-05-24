import { objDiff } from './leetcode-2700';

describe('2023-05-24: LeetCode 2700', () => {
  test('Example 1', () => {
    expect(
      objDiff(
        {},
        {
          a: 1,
          b: 2,
        },
      ),
    ).toEqual({});
  });
  test('Example 2', () => {
    expect(
      objDiff(
        {
          a: 1,
          v: 3,
          x: [],
          z: {
            a: null,
          },
        },
        {
          a: 2,
          v: 4,
          x: [],
          z: {
            a: 2,
          },
        },
      ),
    ).toEqual({
      a: [1, 2],
      v: [3, 4],
      z: {
        a: [null, 2],
      },
    });
  });
  test('Example 3', () => {
    expect(
      objDiff(
        {
          a: 5,
          v: 6,
          z: [1, 2, 4, [2, 5, 7]],
        },
        {
          a: 5,
          v: 7,
          z: [1, 2, 3, [1]],
        },
      ),
    ).toEqual({
      v: [6, 7],
      z: {
        '2': [4, 3],
        '3': {
          '0': [2, 1],
        },
      },
    });
  });
  test('Example 4', () => {
    expect(
      objDiff(
        {
          a: { b: 1 },
        },
        {
          a: [5],
        },
      ),
    ).toEqual({
      a: [{ b: 1 }, [5]],
    });
  });
  test('Example 5', () => {
    expect(
      objDiff(
        {
          a: [1, 2, {}],
          b: false,
        },
        {
          b: false,
          a: [1, 2, {}],
        },
      ),
    ).toEqual({});
  });
});
