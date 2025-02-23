import { NestedInteger, NestedIterator } from './0341';

type NestedList = number | NestedList[];

describe('LeetCode 0341', () => {
  function createNestedInteger(nestedList: NestedList): NestedInteger {
    if (typeof nestedList === 'number') {
      return new NestedInteger(nestedList);
    }
    const nestedInteger = new NestedInteger();
    for (const value of nestedList) {
      if (Array.isArray(value)) {
        nestedInteger.add(createNestedInteger(value));
      } else {
        nestedInteger.add(new NestedInteger(value));
      }
    }
    return nestedInteger;
  }

  function flatten(nestedList: NestedList[]) {
    const iterator = new NestedIterator(nestedList.map(createNestedInteger));
    const arr: number[] = [];
    while (iterator.hasNext()) {
      arr.push(iterator.next());
    }
    return arr;
  }

  test('Example 1', () => {
    const nestedList = [[1, 1], 2, [1, 1]];
    expect(flatten(nestedList)).toEqual([1, 1, 2, 1, 1]);
  });

  test('Example 2', () => {
    const nestedList = [1, [4, [6]]];
    expect(flatten(nestedList)).toEqual([1, 4, 6]);
  });
});
