/**
 * 3324. Find the Sequence of Strings Appeared on the Screen
 * https://leetcode.com/problems/find-the-sequence-of-strings-appeared-on-the-screen
 */
export function stringSequence(target: string): string[] {
  const answer = [];
  let s = '';
  for (const char of target) {
    for (const alphabet of toAlphabet(char)) {
      answer.push(s + alphabet);
    }
    s += char;
  }
  return answer;
}

function* toAlphabet(char: string) {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz';
  for (const alphabet of alphabets) {
    if (char < alphabet) return;
    yield alphabet;
  }
}
