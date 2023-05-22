/**
 * 2633. Convert Object to JSON String
 * https://leetcode.com/problems/convert-object-to-json-string
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function jsonStringify(object: any): string {
  if (object === null) {
    return 'null';
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

  return String(object);
}
