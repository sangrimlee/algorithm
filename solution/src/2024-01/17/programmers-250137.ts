/**
 * 250137. [PCCP 기출문제] 1번 / 붕대 감기
 * https://school.programmers.co.kr/learn/courses/30/lessons/250137
 */
export function windBandage(
  bandage: number[],
  health: number,
  attacks: [number, number][],
): number {
  function getHealAmount(time: number) {
    return time * bandage[1] + Math.floor(time / bandage[0]) * bandage[2];
  }

  let elapsedTime = 0;
  let currentHealth = health;
  for (const [time, damage] of attacks) {
    currentHealth += getHealAmount(time - elapsedTime - 1);
    currentHealth = Math.min(currentHealth, health);
    currentHealth -= damage;
    if (currentHealth <= 0) {
      return -1;
    }
    elapsedTime = time;
  }

  return currentHealth;
}
