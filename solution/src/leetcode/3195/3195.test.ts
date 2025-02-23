import { minimumArea } from './3195';

describe('LeetCode 3195', () => {
  test('Example 1', () => {
    expect(
      minimumArea([
        [0, 1, 0],
        [1, 0, 1],
      ]),
    ).toBe(6);
  });
  test('Example 2', () => {
    expect(
      minimumArea([
        [1, 0],
        [0, 0],
      ]),
    ).toBe(1);
  });
});
