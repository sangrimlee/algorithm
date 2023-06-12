/**
 * 2727. Is Object Empty
 * https://leetcode.com/problems/is-object-empty
 */
export function isEmpty(obj: Record<string, unknown> | unknown[]): boolean {
  if (Array.isArray(obj)) {
    return obj.length === 0;
  }
  if (typeof obj === 'object' && obj !== null) {
    return Object.keys(obj).length === 0;
  }
  return false;
}
