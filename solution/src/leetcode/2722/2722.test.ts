import { join } from './2722';

describe('LeetCode 2722', () => {
  test('Example 1', () => {
    const arr1 = [
      { id: 1, x: 1 },
      { id: 2, x: 9 },
    ];
    const arr2 = [{ id: 3, x: 5 }];
    const result = [
      { id: 1, x: 1 },
      { id: 2, x: 9 },
      { id: 3, x: 5 },
    ];

    expect(join(arr1, arr2)).toEqual(result);
  });
  test('Example 2', () => {
    const arr1 = [
      { id: 1, x: 2, y: 3 },
      { id: 2, x: 3, y: 6 },
    ];
    const arr2 = [
      { id: 2, x: 10, y: 20 },
      { id: 3, x: 0, y: 0 },
    ];
    const result = [
      { id: 1, x: 2, y: 3 },
      { id: 2, x: 10, y: 20 },
      { id: 3, x: 0, y: 0 },
    ];

    expect(join(arr1, arr2)).toEqual(result);
  });
  test('Example 3', () => {
    const arr1 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }];
    const arr2 = [{ id: 1, b: { c: 84 }, v: [1, 3] }];
    const result = [{ id: 1, b: { c: 84 }, v: [1, 3], y: 48 }];

    expect(join(arr1, arr2)).toEqual(result);
  });
});
