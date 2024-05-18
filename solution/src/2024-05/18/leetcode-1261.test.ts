import { createTree } from '@algorithm/lib';
import { FindElements } from './leetcode-1261';

describe('2024-05-18: LeetCode 1261', () => {
  test('Example 1', () => {
    const root = createTree([-1, null, -1]);
    const findElements = new FindElements(root);
    expect(findElements.find(1)).toBe(false);
    expect(findElements.find(2)).toBe(true);
  });
  test('Example 2', () => {
    const root = createTree([-1, -1, -1, -1, -1]);
    const findElements = new FindElements(root);
    expect(findElements.find(1)).toBe(true);
    expect(findElements.find(3)).toBe(true);
    expect(findElements.find(5)).toBe(false);
  });
  test('Example 3', () => {
    const root = createTree([-1, null, -1, null, null, -1, null, null, null, null, null, -1]);
    const findElements = new FindElements(root);
    expect(findElements.find(2)).toBe(true);
    expect(findElements.find(3)).toBe(false);
    expect(findElements.find(4)).toBe(false);
    expect(findElements.find(5)).toBe(true);
  });
});
