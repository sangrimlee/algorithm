/**
 * 564. Find the Closest Palindrome
 * https://leetcode.com/problems/find-the-closest-palindrome
 */
export function nearestPalindromic(n: string): string {
  const num = BigInt(n);
  if (num <= 10n) {
    return (num - 1n).toString();
  }
  if (num === 11n) {
    return '9';
  }

  const length = n.length;
  const prefix = n.slice(0, (length + 1) / 2);
  const candidates = new Set<string>();
  for (const i of [-1, 0, 1]) {
    const newPrefix = (parseInt(prefix) + i).toString();
    const newPostfix = length % 2 === 0 ? reverse(newPrefix) : reverse(newPrefix.slice(0, -1));
    candidates.add(newPrefix + newPostfix);
  }
  candidates.add('9'.repeat(length - 1));
  candidates.add(`1${'0'.repeat(length - 1)}1`);
  candidates.delete(n);

  let answer = num;
  let minDifference = BigInt(n);
  for (const candidate of candidates) {
    const candidateNum = BigInt(candidate);
    const difference = getDifference(num, candidateNum);
    if (difference < minDifference || (difference === minDifference && candidateNum < answer)) {
      answer = candidateNum;
      minDifference = difference;
    }
  }
  return answer.toString();
}

function reverse(str: string): string {
  return [...str].reverse().join('');
}

function getDifference(num1: bigint, num2: bigint) {
  return num1 < num2 ? num2 - num1 : num1 - num2;
}
