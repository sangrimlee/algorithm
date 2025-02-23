/**
 * 3042. Count Prefix and Suffix Pairs I
 * https://leetcode.com/problems/count-prefix-and-suffix-pairs-i
 */
export function countPrefixSuffixPairs(words: string[]): number {
  function isPrefixAndSuffix(str1: string, str2: string) {
    return str2.startsWith(str1) && str2.endsWith(str1);
  }

  const n = words.length;
  let answer = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (isPrefixAndSuffix(words[i], words[j])) {
        answer += 1;
      }
    }
  }
  return answer;
}
