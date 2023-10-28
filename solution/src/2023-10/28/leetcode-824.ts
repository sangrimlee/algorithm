/**
 * 824. Goat Latin
 * https://leetcode.com/problems/goat-latin
 */
export function toGoatLatin(sentence: string): string {
  const goatLatin = (word: string, i: number) => {
    let result = word;
    if (/^[aeiou]/i.test(word)) {
      result += 'ma';
    } else {
      result = result.substring(1) + result[0] + 'ma';
    }
    return result + 'a'.repeat(i + 1);
  };

  const SPACE = ' ';
  return sentence.split(SPACE).map(goatLatin).join(SPACE);
}
