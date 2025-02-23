import { countServers } from './1267';

describe('LeetCode 1267', () => {
  test('Example 1', () => {
    expect(
      countServers([
        [1, 0],
        [0, 1],
      ]),
    ).toBe(0);
  });
  test('Example 2', () => {
    expect(
      countServers([
        [1, 0],
        [1, 1],
      ]),
    ).toBe(3);
  });
  test('Example 3', () => {
    expect(
      countServers([
        [1, 1, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1],
      ]),
    ).toBe(4);
  });
  test('Example 4', () => {
    expect(
      countServers([
        [1, 0, 0, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0],
      ]),
    ).toBe(3);
  });
});
