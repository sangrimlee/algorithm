/**
 * 121684. 체육대회
 * https://school.programmers.co.kr/learn/courses/30/lessons/121684
 */
export function trackMeet(abilities: number[][]) {
  const studentCnt = abilities.length;
  const gameCnt = abilities[0].length;

  const dfs = (i: number, totalAbility: number, selected: Set<number>) => {
    if (i === gameCnt) {
      return totalAbility;
    }
    let maxAbility = totalAbility;
    for (let student = 0; student < studentCnt; student++) {
      if (!selected.has(student)) {
        selected.add(student);
        maxAbility = Math.max(
          maxAbility,
          dfs(i + 1, totalAbility + abilities[student][i], selected),
        );
        selected.delete(student);
      }
    }
    return maxAbility;
  };

  return dfs(0, 0, new Set());
}
