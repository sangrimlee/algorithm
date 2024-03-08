/**
 * 3005. Count Elements With Maximum Frequency
 * https://leetcode.com/problems/count-elements-with-maximum-frequency
 */
export function maxFrequencyElements(nums: number[]): number {
  let maxFrequency = 0;
  let maxFrequencyElement = 0;

  const frequencies = new Map<number, number>();
  nums.forEach((num) => {
    const frequency = (frequencies.get(num) ?? 0) + 1;
    frequencies.set(num, frequency);
    if (maxFrequency < frequency) {
      maxFrequency = frequency;
      maxFrequencyElement = 1;
    } else if (maxFrequency === frequency) {
      maxFrequencyElement += 1;
    }
  });

  return maxFrequency * maxFrequencyElement;
}
