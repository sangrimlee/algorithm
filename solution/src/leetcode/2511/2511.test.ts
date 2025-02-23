import { captureForts } from './2511';

describe('LeetCode 2511', () => {
  test('Example 1', () => {
    expect(captureForts([1, 0, 0, -1, 0, 0, 0, 0, 1])).toBe(4);
  });
  test('Example 2', () => {
    expect(captureForts([0, 0, 1, -1])).toBe(0);
  });
});
