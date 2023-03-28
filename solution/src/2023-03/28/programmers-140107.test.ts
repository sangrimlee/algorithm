import { markingDot } from './programmers-140107';

describe('2023-03-28: Programmers 140107', () => {
  test('Example 1', () => {
    expect(markingDot(2, 4)).toEqual(6);
  });
  test('Example 2', () => {
    expect(markingDot(1, 5)).toEqual(26);
  });
});
