import { canFinish } from './0207';

describe('LeetCode 0207', () => {
  test('Example 1', () => {
    expect(canFinish(2, [[1, 0]])).toBe(true);
  });
  test('Example 2', () => {
    expect(
      canFinish(2, [
        [1, 0],
        [0, 1],
      ]),
    ).toBe(false);
  });
});
