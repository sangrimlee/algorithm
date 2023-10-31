/**
 * 2433. Find The Original Array of Prefix Xor
 * https://leetcode.com/problems/find-the-original-array-of-prefix-xor
 */
export function findArray(pref: number[]): number[] {
  return pref.map((p, i) => (i === 0 ? p : p ^ pref[i - 1]));
}
