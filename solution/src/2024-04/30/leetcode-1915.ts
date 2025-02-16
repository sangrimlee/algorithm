/**
 * 1915. Number of Wonderful Substrings
 * https://leetcode.com/problems/number-of-wonderful-substrings
 */
export function wonderfulSubstrings(word: string): number {
  const count = new Array<number>(1025).fill(0);
  count[0] = 1;

  let answer = 0;

  let mask = 0;
  for (const char of word) {
    const charCode = char.charCodeAt(0) - 'a'.charCodeAt(0);
    mask ^= 1 << charCode;
    answer += count[mask];
    for (let n = 0; n < 10; n++) {
      answer += count[mask ^ (1 << n)];
    }
    count[mask] += 1;
  }
  return answer;
}
