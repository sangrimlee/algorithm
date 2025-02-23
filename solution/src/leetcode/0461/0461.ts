/**
 * 461. Hamming Distance
 * https://leetcode.com/problems/hamming-distance
 */
export function hammingDistance(x: number, y: number): number {
  const countBit = (n: number) => {
    let count = 0;
    while (n !== 0) {
      count += n & 1;
      n = n >> 1;
    }
    return count;
  };

  return countBit(x ^ y);
}
