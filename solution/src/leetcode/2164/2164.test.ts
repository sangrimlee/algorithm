import { sortEvenOdd } from './2164';

describe('LeetCode 2164', () => {
  test('Example 1', () => {
    expect(sortEvenOdd([4, 1, 2, 3])).toEqual([2, 3, 4, 1]);
  });
  test('Example 2', () => {
    expect(sortEvenOdd([2, 1])).toEqual([2, 1]);
  });
});
