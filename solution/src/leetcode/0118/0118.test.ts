import { generate } from './0118';

describe('LeetCode 0118', () => {
  test('Example 1', () => {
    expect(generate(5)).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]);
  });
  test('Example 2', () => {
    expect(generate(1)).toEqual([[1]]);
  });
});
