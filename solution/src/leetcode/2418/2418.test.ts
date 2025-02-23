import { sortPeople } from './2418';

describe('LeetCode 2418', () => {
  test('Example 1', () => {
    expect(sortPeople(['Mary', 'John', 'Emma'], [180, 165, 170])).toEqual(['Mary', 'Emma', 'John']);
  });
  test('Example 2', () => {
    expect(sortPeople(['Alice', 'Bob', 'Bob'], [155, 185, 150])).toEqual(['Bob', 'Alice', 'Bob']);
  });
});
