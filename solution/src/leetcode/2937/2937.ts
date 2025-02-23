/**
 * 2937. Make Three Strings Equal
 * https://leetcode.com/problems/make-three-strings-equal
 */
export function findMinimumOperations(s1: string, s2: string, s3: string): number {
  const minLength = Math.min(s1.length, s2.length, s3.length);
  let prefix = 0;
  while (prefix < minLength && s1[prefix] === s2[prefix] && s2[prefix] === s3[prefix]) {
    prefix += 1;
  }
  if (prefix === 0) {
    return -1;
  }
  return s1.length + s2.length + s3.length - 3 * prefix;
}
