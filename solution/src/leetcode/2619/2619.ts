/* eslint-disable @typescript-eslint/no-unsafe-return */

/**
 * 2619. Array Prototype Last
 * https://leetcode.com/problems/array-prototype-last
 */
declare global {
  interface Array<T> {
    last(): T | -1;
  }
}

Array.prototype.last = function () {
  return this.length === 0 ? -1 : this[this.length - 1];
};

export {};
