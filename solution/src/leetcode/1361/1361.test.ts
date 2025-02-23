import { validateBinaryTreeNodes } from './1361';

describe('LeetCode 1361', () => {
  test('Example 1', () => {
    expect(validateBinaryTreeNodes(4, [1, -1, 3, -1], [2, -1, -1, -1])).toBe(true);
  });
  test('Example 2', () => {
    expect(validateBinaryTreeNodes(4, [1, -1, 3, -1], [2, 3, -1, -1])).toBe(false);
  });
  test('Example 3', () => {
    expect(validateBinaryTreeNodes(2, [1, 0], [-1, -1])).toBe(false);
  });
  test('Example 4', () => {
    expect(validateBinaryTreeNodes(4, [1, 0, 3, -1], [-1, -1, -1, -1])).toBe(false);
  });
});
