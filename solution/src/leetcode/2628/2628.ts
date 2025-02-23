/**
 * 2628. JSON Deep Equal
 * https://leetcode.com/problems/json-deep-equal
 */
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
export function areDeeplyEqual(o1: JSONValue, o2: JSONValue): boolean {
  if (typeof o1 === 'object' && typeof o2 === 'object') {
    if (o1 === null || o2 === null) {
      return o1 === o2;
    }

    if (Array.isArray(o1) && Array.isArray(o2)) {
      return o1.length === o2.length && o1.every((v, i) => areDeeplyEqual(v, o2[i]));
    }

    if (Array.isArray(o1) || Array.isArray(o2)) {
      return false;
    }

    const keys1 = Object.keys(o1);
    const keys2 = Object.keys(o2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    return keys1.every((key) => areDeeplyEqual(o1[key], o2[key]));
  }

  return o1 === o2;
}
