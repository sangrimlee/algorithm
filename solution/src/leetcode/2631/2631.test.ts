import './2631';

describe('LeetCode 2631', () => {
  test('Example 1', () => {
    const array = [{ id: '1' }, { id: '1' }, { id: '2' }];
    expect(array.groupBy((item) => item.id)).toEqual({
      '1': [{ id: '1' }, { id: '1' }],
      '2': [{ id: '2' }],
    });
  });

  test('Example 2', () => {
    const array = [
      [1, 2, 3],
      [1, 3, 5],
      [1, 5, 9],
    ];
    expect(array.groupBy((list) => String(list[0]))).toEqual({
      '1': [
        [1, 2, 3],
        [1, 3, 5],
        [1, 5, 9],
      ],
    });
  });

  test('Example 3', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(array.groupBy((n) => String(n > 5))).toEqual({
      true: [6, 7, 8, 9, 10],
      false: [1, 2, 3, 4, 5],
    });
  });
});
