/**
 * 133499. 옹알이 (2)
 * https://school.programmers.co.kr/learn/courses/30/lessons/133499
 */
export function babblingII(babbling: string[]): number {
  const isPronounceable = (word: string) => {
    return !/(aya|ye|woo|ma)\1+/.test(word) && /^(aya|ye|woo|ma)+$/.test(word);
  };
  return babbling.filter(isPronounceable).length;
}
