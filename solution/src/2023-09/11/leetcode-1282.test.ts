import { groupThePeople } from './leetcode-1282';

describe('2023-09-11: LeetCode 1282', () => {
  function test1282(groupSizes: number[], groups: number[][]) {
    const peoples: number[] = [];
    for (const group of groups) {
      for (const people of group) {
        if (groupSizes[people] !== group.length) {
          return false;
        }
        peoples.push(people);
      }
    }
    return new Set(peoples).size === peoples.length;
  }

  test('Example 1', () => {
    const groupSizes = [3, 3, 3, 3, 3, 1, 3];
    const answer = groupThePeople(groupSizes);
    expect(test1282(groupSizes, answer)).toBeTruthy();
  });
  test('Example 2', () => {
    const groupSizes = [2, 1, 3, 3, 3, 2];
    const answer = groupThePeople(groupSizes);
    expect(test1282(groupSizes, answer)).toBeTruthy();
  });
});
