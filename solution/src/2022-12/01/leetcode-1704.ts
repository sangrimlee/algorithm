/**
 * 1704. Determine if String Halves Are Alike
 * https://leetcode.com/problems/determine-if-string-halves-are-alike/
 */
export function halvesAreAlike(s: string): boolean {
  const mid = Math.floor(s.length / 2);
  const [a, b] = [s.substring(0, mid), s.substring(mid)];

  const isVowel = (char: string) => /^[aeiou]$/i.test(char);
  const countVowel = (s: string) =>
    [...s].reduce((prev, char) => (isVowel(char) ? prev + 1 : prev), 0);

  return countVowel(a) === countVowel(b);
}
