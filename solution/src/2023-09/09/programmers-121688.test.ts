import { newRecruits } from './programmers-121688';

describe('2023-09-09: Programmers 121688', () => {
  test('Example 1', () => {
    expect(newRecruits([10, 3, 7, 2], 2)).toBe(37);
  });
  test('Example 2', () => {
    expect(newRecruits([1, 2, 3, 4], 3)).toBe(26);
  });
});
