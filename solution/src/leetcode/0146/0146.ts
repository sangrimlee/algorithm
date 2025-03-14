/**
 * 146. LRU Cache
 * https://leetcode.com/problems/lru-cache
 */
export class LRUCache {
  private readonly cache: Map<number, number>;
  private readonly capacity: number;

  constructor(capacity: number) {
    this.cache = new Map();
    this.capacity = capacity;
  }

  update(key: number, value: number) {
    this.cache.delete(key);
    this.cache.set(key, value);
  }

  get(key: number): number {
    const value = this.cache.get(key);
    if (value === undefined) {
      return -1;
    }
    this.update(key, value);
    return value;
  }

  put(key: number, value: number): void {
    this.update(key, value);
    if (this.capacity < this.cache.size) {
      const lastKey = this.cache.keys().next().value;
      if (lastKey !== undefined) {
        this.cache.delete(lastKey);
      }
    }
  }
}
