/**
 * 2491. Divide Players Into Teams of Equal Skill
 * https://leetcode.com/problems/divide-players-into-teams-of-equal-skill
 */
export function dividePlayers(skill: number[]): number {
  const n = skill.length;
  const totalSkill = skill.reduce((acc, s) => acc + s, 0);
  if (totalSkill % (n / 2) !== 0) {
    return -1;
  }
  const counter = new Map<number, number>();
  for (const s of skill) {
    counter.set(s, (counter.get(s) ?? 0) + 1);
  }

  let answer = 0;
  const targetSkill = totalSkill / (n / 2);
  for (const [playerSkill, playerCount] of counter) {
    const partnerSkill = targetSkill - playerSkill;
    const partnerCount = counter.get(partnerSkill) ?? 0;
    if (playerCount !== partnerCount) {
      return -1;
    }
    answer += playerSkill * partnerSkill * playerCount;
  }
  return answer / 2;
}
