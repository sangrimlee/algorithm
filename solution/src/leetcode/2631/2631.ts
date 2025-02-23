/**
 * 2631. Group By
 * https://leetcode.com/problems/group-by
 */
declare global {
  interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>;
  }
}

Array.prototype.groupBy = function (fn) {
  return this.reduce((group: Record<string, unknown[]>, item) => {
    const key = fn(item);
    if (Object.hasOwn(group, key)) {
      group[key].push(item);
    } else {
      group[key] = [item];
    }
    return group;
  }, {});
};

export {};
