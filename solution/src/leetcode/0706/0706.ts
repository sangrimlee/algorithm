/**
 * 706. Design HashMap
 * https://leetcode.com/problems/design-hashmap
 */
export class MyHashMap extends Map<number, number> {
  put(key: number, value: number): void {
    super.set(key, value);
  }

  get(key: number): number {
    return super.get(key) ?? -1;
  }

  remove(key: number): void {
    super.delete(key);
  }
}

/** Use without `Map`
class MyHashMap {
  private readonly arr: number[];

  constructor() {
    this.arr = new Array(10 ** 6 + 1).fill(-1);
  }

  put(key: number, value: number): void {
    this.arr[key] = value;
  }

  get(key: number): number {
    return this.arr[key];
  }

  remove(key: number): void {
    this.arr[key] = -1;
  }
}
*/
