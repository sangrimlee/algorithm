import { constructRectangle } from './0492';

describe('LeetCode 0492', () => {
  test('Example 1', () => {
    expect(constructRectangle(4)).toEqual([2, 2]);
  });
  test('Example 2', () => {
    expect(constructRectangle(37)).toEqual([37, 1]);
  });
  test('Example 3', () => {
    expect(constructRectangle(122122)).toEqual([427, 286]);
  });
});
