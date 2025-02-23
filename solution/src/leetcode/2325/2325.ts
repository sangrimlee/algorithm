/**
 * 2325. Decode the Message
 * https://leetcode.com/problems/decode-the-message
 */
export function decodeMessage(key: string, message: string): string {
  const diagram = new Map<string, string>([[' ', ' ']]);
  const alphabets = 'abcdefghijklmnopqrstuvwxyz';

  let currentIndex = 0;
  for (const char of key) {
    if (!diagram.has(char)) {
      diagram.set(char, alphabets[currentIndex]);
      currentIndex += 1;
    }
  }

  let answer = '';
  for (const char of message) {
    answer += diagram.get(char) ?? '';
  }
  return answer;
}
