/**
 * 299. Bulls and Cows
 * https://leetcode.com/problems/bulls-and-cows
 */
export function getHint(secret: string, guess: string): string {
  const n = secret.length;
  const secrets = new Array<number>(10).fill(0);
  const guesses = new Array<number>(10).fill(0);

  let [bulls, cows] = [0, 0];
  for (let i = 0; i < n; i++) {
    if (secret[i] === guess[i]) {
      bulls++;
    } else {
      secrets[parseInt(secret[i])]++;
      guesses[parseInt(guess[i])]++;
    }
  }

  for (let i = 0; i < 10; i++) {
    cows += Math.min(secrets[i], guesses[i]);
  }
  return `${bulls.toString()}A${cows.toString()}B`;
}
