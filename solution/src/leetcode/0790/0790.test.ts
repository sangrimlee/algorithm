import { numTilings } from './0790';

describe('LeetCode 0790', () => {
  test('Example 1', () => {
    expect(numTilings(3)).toBe(5);
  });

  test('Example 2', () => {
    expect(numTilings(1)).toBe(1);
  });
});
