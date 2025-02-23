/**
 * 2722. Join Two Arrays by ID
 * https://leetcode.com/problems/join-two-arrays-by-id
 */
type ValueWithID = Record<string, unknown> & {
  id: number;
};

export function join(arr1: ValueWithID[], arr2: ValueWithID[]): ValueWithID[] {
  const result: Record<number, ValueWithID> = {};
  arr1.forEach((value) => {
    result[value.id] = value;
  });
  arr2.forEach((value) => {
    result[value.id] = {
      ...(result[value.id] ?? {}),
      ...value,
    };
  });

  return Object.values(result);
}
