import { checkIfExist } from './1346';

describe('LeetCode 1346', () => {
  test('Example 1', () => {
    expect(checkIfExist([10, 2, 5, 3])).toBe(true);
  });
  test('Example 2', () => {
    expect(checkIfExist([3, 1, 7, 11])).toBe(false);
  });
  test('Example 3', () => {
    expect(checkIfExist([-2, 0, 10, -19, 4, 6, -8])).toBe(false);
  });
});
