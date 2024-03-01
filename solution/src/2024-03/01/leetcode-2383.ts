/**
 * 2383. Minimum Hours of Training to Win a Competition
 * https://leetcode.com/problems/minimum-hours-of-training-to-win-a-competition
 */
export function minNumberOfHours(
  initialEnergy: number,
  initialExperience: number,
  energy: number[],
  experience: number[],
): number {
  const n = energy.length;

  let answer = 0;
  let [currentEnergy, currentExperience] = [initialEnergy, initialExperience];

  for (let i = 0; i < n; i++) {
    const nextEnergy = Math.max(energy[i] + 1, currentEnergy);
    const nextExperience = Math.max(experience[i] + 1, currentExperience);
    answer += Math.max(nextEnergy - currentEnergy, 0);
    answer += Math.max(nextExperience - currentExperience, 0);
    currentEnergy = nextEnergy - energy[i];
    currentExperience = nextExperience + experience[i];
  }

  return answer;
}
