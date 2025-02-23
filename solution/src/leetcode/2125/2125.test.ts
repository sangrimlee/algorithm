import { numberOfBeams } from './2125';

describe('LeetCode 2125', () => {
  test('Example 1', () => {
    expect(numberOfBeams(['011001', '000000', '010100', '001000'])).toBe(8);
  });
  test('Example 2', () => {
    expect(numberOfBeams(['000', '111', '000'])).toBe(0);
  });
});
