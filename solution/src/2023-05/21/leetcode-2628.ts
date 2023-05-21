/**
 * 2628. JSON Deep Equal
 * https://leetcode.com/problems/json-deep-equal
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function areDeeplyEqual(o1: any, o2: any): boolean {
  if (typeof o1 !== typeof o2 || Array.isArray(o1) !== Array.isArray(o2)) {
    return false;
  }

  if (typeof o1 !== 'object' && typeof o2 !== 'object') {
    return o1 === o2;
  }

  if (Array.isArray(o1) && Array.isArray(o2)) {
    return o1.length === o2.length && o1.every((v, i) => areDeeplyEqual(v, o2[i]));
  }

  for (const key in o1) {
    if (!areDeeplyEqual(o1[key], o2[key])) {
      return false;
    }
  }
  return true;
}
