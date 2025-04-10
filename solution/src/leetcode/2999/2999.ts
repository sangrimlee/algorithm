/**
 * 2999. Count the Number of Powerful Integers
 * https://leetcode.com/problems/count-the-number-of-powerful-integers
 */
export function numberOfPowerfulInt(
  start: number,
  finish: number,
  limit: number,
  s: string,
): number {
  const low = (start - 1).toString();
  const high = finish.toString();
  return calculate(high, s, limit) - calculate(low, s, limit);
}

function calculate(x: string, s: string, limit: number): number {
  if (x.length < s.length) {
    return 0;
  }
  if (x.length === s.length) {
    return x >= s ? 1 : 0;
  }

  let prefixCount = 0;
  const prefixLength = x.length - s.length;
  for (let i = 0; i < prefixLength; i++) {
    const digit = parseInt(x[i]);
    if (limit < digit) {
      prefixCount += (limit + 1) ** (prefixLength - i);
      return prefixCount;
    }
    prefixCount += digit * (limit + 1) ** (prefixLength - 1 - i);
  }

  const suffix = x.slice(-s.length);
  return suffix >= s ? prefixCount + 1 : prefixCount;
}
