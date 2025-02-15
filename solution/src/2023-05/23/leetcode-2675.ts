/**
 * 2675. Array of Objects to Matrix
 * https://leetcode.com/problems/array-of-objects-to-matrix
 */
export function jsonToMatrix(arr: unknown[]): (string | number | boolean | null)[][] {
  const isPrimitive = (value: unknown) => {
    return (
      typeof value === 'string' ||
      typeof value === 'number' ||
      typeof value === 'boolean' ||
      value === null
    );
  };

  const isObject = (value: unknown) => {
    return typeof value === 'object' && value !== null;
  };

  const getKeys = (obj: unknown): string[] => {
    if (!isObject(obj)) {
      return [''];
    }
    const keys: string[] = [];
    for (const [key, value] of Object.entries(obj)) {
      for (const nestedKey of getKeys(value)) {
        keys.push(nestedKey ? `${key}.${nestedKey}` : key);
      }
    }
    return keys;
  };

  const getValue = (obj: unknown, path: string): string | number | boolean | null => {
    const paths = path.split('.');
    let value = obj;
    for (const p of paths) {
      if (isObject(value) && Object.hasOwn(value, p)) {
        value = (value as Record<string, unknown>)[p];
      } else {
        return '';
      }
    }

    return isPrimitive(value) ? value : '';
  };

  const keySet = new Set<string>();
  arr.forEach((value) => {
    getKeys(value).forEach((key) => keySet.add(key));
  });

  const keys = [...keySet].sort();

  const matrix: (string | number | boolean | null)[][] = [keys];
  arr.forEach((obj: unknown) => {
    matrix.push(keys.map((key: string) => getValue(obj, key)));
  });

  return matrix;
}
