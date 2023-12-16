/**
 * 1636. Sort Array by Increasing Frequency
 * https://leetcode.com/problems/sort-array-by-increasing-frequency
 */
export function frequencySort(nums: number[]): number[] {
  const freqs = new Map<number, number>();
  nums.forEach((num) => {
    freqs.set(num, (freqs.get(num) ?? 0) + 1);
  });
  return nums.sort((a, b) => {
    const freqA = freqs.get(a) ?? 0;
    const freqB = freqs.get(b) ?? 0;
    return freqA === freqB ? b - a : freqA - freqB;
  });
}
