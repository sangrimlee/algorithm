/**
 * 1103. Distribute Candies to People
 * https://leetcode.com/problems/distribute-candies-to-people
 */
export function distributeCandies(candies: number, num_people: number): number[] {
  const answer = new Array<number>(num_people).fill(0);

  let turn = 1;
  let remainCandies = candies;
  while (0 < remainCandies) {
    const currentIndex = (turn - 1) % num_people;
    answer[currentIndex] += Math.min(remainCandies, turn);
    remainCandies -= turn;
    turn += 1;
  }
  return answer;
}
