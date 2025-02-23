import { maxHeightOfTriangle } from './3200';

describe('LeetCode 3200', () => {
  test('Example 1', () => {
    expect(maxHeightOfTriangle(2, 4)).toBe(3);
  });
  test('Example 2', () => {
    expect(maxHeightOfTriangle(2, 1)).toBe(2);
  });
  test('Example 3', () => {
    expect(maxHeightOfTriangle(1, 1)).toBe(1);
  });
  test('Example 4', () => {
    expect(maxHeightOfTriangle(10, 1)).toBe(2);
  });
});
