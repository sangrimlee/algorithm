import { checkIfInstanceOf } from './leetcode-2618';

describe('2023-05-29: LeetCode 2618', () => {
  test('Example 1', () => {
    expect(checkIfInstanceOf(new Date(), Date)).toBeTruthy();
  });
  test('Example 2', () => {
    // eslint-disable-next-line @typescript-eslint/no-extraneous-class -- It's just an example.
    class Animal {}
    class Dog extends Animal {}

    expect(checkIfInstanceOf(new Dog(), Animal)).toBeTruthy();
  });
  test('Example 3', () => {
    expect(checkIfInstanceOf(Date, Date)).toBeFalsy();
  });
  test('Example 4', () => {
    expect(checkIfInstanceOf(5, Number)).toBeTruthy();
  });
});
