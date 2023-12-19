import { OrderedStream } from './leetcode-1656';

describe('2023-12-18: LeetCode 1656', () => {
  test('Example 1', () => {
    const orderedStream = new OrderedStream(5);
    expect(orderedStream.insert(3, 'ccccc')).toEqual([]);
    expect(orderedStream.insert(1, 'aaaaa')).toEqual(['aaaaa']);
    expect(orderedStream.insert(2, 'bbbbb')).toEqual(['bbbbb', 'ccccc']);
    expect(orderedStream.insert(5, 'eeeee')).toEqual([]);
    expect(orderedStream.insert(4, 'ddddd')).toEqual(['ddddd', 'eeeee']);
  });
});
