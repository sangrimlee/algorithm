/**
 * 2053. Kth Distinct String in an Array
 * https://leetcode.com/problems/kth-distinct-string-in-an-array
 */
export function kthDistinct(arr: string[], k: number): string {
  const answer = new Set<string>();

  const set = new Set<string>();
  arr.forEach((num) => {
    if (!set.has(num)) {
      answer.add(num);
      set.add(num);
    } else {
      answer.delete(num);
    }
  });

  return k <= answer.size ? [...answer][k - 1] : '';
}
