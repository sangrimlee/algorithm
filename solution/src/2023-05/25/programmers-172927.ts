/**
 * 172927. 광물 캐기
 * https://school.programmers.co.kr/learn/courses/30/lessons/172927
 */
export function mineForMinerals(picks: number[], minerals: string[]) {
  const totalPicks = picks.reduce((acc, curr) => acc + curr, 0);

  const getFatigue = (pick: number, mineral: string) => {
    const fatigue = mineral === 'diamond' ? 0 : mineral === 'iron' ? 1 : 2;
    return Math.max(Math.floor(5 ** pick / 5 ** fatigue), 1);
  };

  const getFatigues = (pick: number, startIndex: number) => {
    let fatigue = 0;
    for (let i = startIndex; i < Math.min(minerals.length, startIndex + 5); i++) {
      fatigue += getFatigue(pick, minerals[i]);
    }
    return fatigue;
  };

  let answer = Number.MAX_SAFE_INTEGER;

  const dfs = (used: number, i: number, fatigue: number) => {
    if (used === totalPicks || minerals.length <= i) {
      answer = Math.min(answer, fatigue);
      return;
    }

    for (let pick = 0; pick <= 2; pick++) {
      if (0 < picks[pick]) {
        picks[pick] -= 1;
        dfs(used + 1, i + 5, fatigue + getFatigues(pick, i));
        picks[pick] += 1;
      }
    }
  };

  dfs(0, 0, 0);

  return answer;
}
