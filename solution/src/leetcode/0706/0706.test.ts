import { MyHashMap } from './0706';

describe('LeetCode 0706', () => {
  test('Example 1', () => {
    const myHashMap = new MyHashMap();
    myHashMap.put(1, 1);
    myHashMap.put(1, 1);
    myHashMap.put(2, 2);
    expect(myHashMap.get(1)).toBe(1);
    expect(myHashMap.get(3)).toBe(-1);
    myHashMap.put(2, 1);
    expect(myHashMap.get(2)).toBe(1);
    myHashMap.remove(2);
    expect(myHashMap.get(2)).toBe(-1);
  });
});
