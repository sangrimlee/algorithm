/**
 * 2727. Is Object Empty
 * https://leetcode.com/problems/is-object-empty
 */
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[];
export function isEmpty(obj: Obj): boolean {
  if (Array.isArray(obj)) {
    return obj.length === 0;
  }
  if (typeof obj === 'object') {
    return Object.keys(obj).length === 0;
  }
  return false;
}
