/**
 * 2657. Find the Prefix Common Array of Two Arrays
 * https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays
 */
export function findThePrefixCommonArray(A: number[], B: number[]): number[] {
  const n = A.length;
  const set = new Set();
  let prefixCount = 0;
  function addNumber(num: number) {
    if (set.has(num)) {
      prefixCount += 1;
    } else {
      set.add(num);
    }
  }

  const C = [];
  for (let i = 0; i < n; i++) {
    addNumber(A[i]);
    addNumber(B[i]);
    C.push(prefixCount);
  }
  return C;
}
