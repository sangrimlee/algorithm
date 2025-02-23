/**
 * 2700. Differences Between Two Objects
 * https://leetcode.com/problems/differences-between-two-objects
 */
export function objDiff(obj1: unknown, obj2: unknown): unknown {
  const isObject = (value: unknown): value is Record<string, unknown> | unknown[] => {
    return typeof value === 'object' && value !== null;
  };

  const hasDiff = (diff: unknown) => {
    return isObject(diff) && Object.keys(diff).length > 0;
  };

  if (obj1 === obj2) {
    return {};
  }

  if (!isObject(obj1) || !isObject(obj2)) {
    return [obj1, obj2];
  }

  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    const diff: Record<string, unknown> = {};
    for (let i = 0; i < Math.min(obj1.length, obj2.length); i++) {
      const nestedDiff = objDiff(obj1[i], obj2[i]);
      if (hasDiff(nestedDiff)) {
        diff[i] = nestedDiff;
      }
    }
    return diff;
  }

  if (Array.isArray(obj1) || Array.isArray(obj2)) {
    return [obj1, obj2];
  }

  const diff: Record<string, unknown> = {};
  for (const key in obj1) {
    if (Object.hasOwn(obj2, key)) {
      const nestedDiff = objDiff(obj1[key], obj2[key]);
      if (hasDiff(nestedDiff)) {
        diff[key] = nestedDiff;
      }
    }
  }
  return diff;
}
