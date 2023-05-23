import { jsonToMatrix } from './leetcode-2675';

describe('2023-05-23: LeetCode 2675', () => {
  test('Example 1', () => {
    const arr = [
      { b: 1, a: 2 },
      { b: 3, a: 4 },
    ];
    const result = [
      ['a', 'b'],
      [2, 1],
      [4, 3],
    ];

    expect(jsonToMatrix(arr)).toEqual(result);
  });

  test('Example 2', () => {
    const arr = [{ a: 1, b: 2 }, { c: 3, d: 4 }, {}];
    const result = [
      ['a', 'b', 'c', 'd'],
      [1, 2, '', ''],
      ['', '', 3, 4],
      ['', '', '', ''],
    ];

    expect(jsonToMatrix(arr)).toEqual(result);
  });

  test('Example 3', () => {
    const arr = [{ a: { b: 1, c: 2 } }, { a: { b: 3, d: 4 } }];
    const result = [
      ['a.b', 'a.c', 'a.d'],
      [1, 2, ''],
      [3, '', 4],
    ];

    expect(jsonToMatrix(arr)).toEqual(result);
  });

  test('Example 4', () => {
    const arr = [[{ a: null }], [{ b: true }], [{ c: 'x' }]];
    const result = [
      ['0.a', '0.b', '0.c'],
      [null, '', ''],
      ['', true, ''],
      ['', '', 'x'],
    ];

    expect(jsonToMatrix(arr)).toEqual(result);
  });

  test('Example 5', () => {
    const arr = [{}, {}, {}];
    const result = [[], [], [], []];

    expect(jsonToMatrix(arr)).toEqual(result);
  });
});
