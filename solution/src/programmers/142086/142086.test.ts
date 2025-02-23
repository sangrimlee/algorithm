import { solution } from './142086';

describe('LeetCode 142086', () => {
  test('Example 1', () => {
    expect(solution('banana')).toEqual([-1, -1, -1, 2, 2, 2]);
  });

  test('Example 2', () => {
    expect(solution('foobar')).toEqual([-1, -1, 1, -1, -1, -1]);
  });
});
