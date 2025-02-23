/**
 * 1545. Find Kth Bit in Nth Binary String
 * https://leetcode.com/problems/find-kth-bit-in-nth-binary-string
 */
export function findKthBit(n: number, k: number): string {
  let invertCount = 0;
  let totalLength = (1 << n) - 1;
  while (1 < k) {
    const mid = Math.floor(totalLength / 2);
    if (k === mid + 1) {
      return invertCount % 2 === 0 ? '1' : '0';
    }
    if (k > mid) {
      k = totalLength + 1 - k;
      invertCount += 1;
    }
    totalLength = Math.floor(totalLength / 2);
  }
  return invertCount % 2 === 0 ? '0' : '1';
}
