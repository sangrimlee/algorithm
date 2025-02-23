/**
 * 2633. Convert Object to JSON String
 * https://leetcode.com/problems/convert-object-to-json-string
 */
export function jsonStringify(object: unknown): string {
  if (object === null || object === undefined) {
    return String(object);
  }

  if (typeof object === 'boolean') {
    return object ? 'true' : 'false';
  }

  if (typeof object === 'number') {
    return String(object);
  }

  if (typeof object === 'string') {
    return `"${object}"`;
  }

  if (Array.isArray(object)) {
    return `[${object.map((obj) => jsonStringify(obj)).join(',')}]`;
  }

  if (typeof object === 'object') {
    return `{${Object.entries(object)
      .map(([key, value]) => `"${key}":${jsonStringify(value)}`)
      .join(',')}}`;
  }

  return '';
}
