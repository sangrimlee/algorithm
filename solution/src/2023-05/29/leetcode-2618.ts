/**
 * 2618. Check if Object Instance of Class
 * https://leetcode.com/problems/check-if-object-instance-of-class
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export function checkIfInstanceOf(obj: any, classFunction: any): boolean {
  if (obj === null || obj === undefined || typeof classFunction !== 'function') {
    return false;
  }

  if (typeof obj === 'object') {
    return obj instanceof classFunction;
  }

  return Object(obj) instanceof classFunction;
}

/**
 * Solution with Prototype Chaining with Generator Function
 * without using instanceof.
function* prototypeGenerator(obj: any) {
  let currentPrototype = Object.getPrototypeOf(obj);

  while (currentPrototype !== null) {
    yield currentPrototype;
    currentPrototype = Object.getPrototypeOf(currentPrototype);
  }
}

export function checkIfInstanceOf(obj: any, classFunction: any): boolean {
  if (obj === null || obj === undefined || typeof classFunction !== 'function') {
    return false;
  }

  for (const prototype of prototypeGenerator(obj)) {
    if (prototype === classFunction.prototype) {
      return true;
    }
  }
  return false;
}
*/
