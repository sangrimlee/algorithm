/**
 * 155652. 둘만의 암호
 * https://school.programmers.co.kr/learn/courses/30/lessons/155652
 */
export function ourSecret(s: string, skip: string, index: number) {
  const alphabet = [...'abcdefghijklmnopqrstuvwxyz'].filter((char) => !skip.includes(char));
  const skipIndex = (char: string) => {
    return alphabet[(alphabet.indexOf(char) + index) % alphabet.length];
  };

  return [...s].map(skipIndex).join('');
}
