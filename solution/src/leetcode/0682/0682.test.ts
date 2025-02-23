import { calPoints } from './0682';

describe('LeetCode 0682', () => {
  test('Example 1', () => {
    expect(calPoints(['5', '2', 'C', 'D', '+'])).toBe(30);
  });
  test('Example 2', () => {
    expect(calPoints(['5', '-2', '4', 'C', 'D', '9', '+', '+'])).toBe(27);
  });
  test('Example 3', () => {
    expect(calPoints(['1', 'C'])).toBe(0);
  });
});
