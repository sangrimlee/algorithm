/**
 * 3159. Find Occurrences of an Element in an Array
 * https://leetcode.com/problems/find-occurrences-of-an-element-in-an-array
 */
export function occurrencesOfElement(nums: number[], queries: number[], x: number): number[] {
  const indices: number[] = [];
  nums.forEach((num, i) => {
    if (num === x) {
      indices.push(i);
    }
  });

  return queries.map((query) => (query <= indices.length ? indices[query - 1] : -1));
}
