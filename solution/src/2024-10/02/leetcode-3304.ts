/**
 * 3304. Find the K-th Character in String Game I
 * https://leetcode.com/problems/find-the-k-th-character-in-string-game-i
 */
export function kthCharacter(k: number): string {
  let answer = 'a';
  while (answer.length < k) {
    let nextCharacters = '';
    for (const char of answer) {
      nextCharacters += getNextCharacter(char);
    }
    answer += nextCharacters;
  }

  return answer[k - 1];
}

function getNextCharacter(char: string) {
  const aCode = 'a'.charCodeAt(0);
  const charCode = char.charCodeAt(0);
  return String.fromCharCode(((charCode - aCode + 1) % 26) + aCode);
}
