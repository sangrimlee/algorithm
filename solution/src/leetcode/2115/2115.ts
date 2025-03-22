/**
 * 2115. Find All Possible Recipes from Given Supplies
 * https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies
 */
export function findAllRecipes(
  recipes: string[],
  ingredients: string[][],
  supplies: string[],
): string[] {
  const n = recipes.length;
  const graph = new Map<string, Set<string>>();
  const indegrees = new Map<string, number>();

  // 그래프 및 진입 차수 초기화
  for (let i = 0; i < n; i++) {
    const recipe = recipes[i];
    for (const ingredient of ingredients[i]) {
      if (!graph.has(ingredient)) {
        graph.set(ingredient, new Set<string>());
      }
      graph.get(ingredient)?.add(recipe);
      indegrees.set(recipe, (indegrees.get(recipe) ?? 0) + 1);
    }
  }

  // 기본으로 공급되는 재료에 대한 진입 차수 초기화
  for (const supply of supplies) {
    indegrees.set(supply, 0);
  }

  // 초기 진입 차수가 0인 레시피 및 재료들에 대한 큐 초기화
  let queue: string[] = [];
  for (const [recipe, indegree] of indegrees) {
    if (indegree === 0) {
      queue.push(recipe);
    }
  }

  // 위상 정렬 수행
  while (0 < queue.length) {
    const nextQueue: string[] = [];
    for (const recipe of queue) {
      for (const canMakeRecipe of graph.get(recipe) ?? []) {
        indegrees.set(canMakeRecipe, (indegrees.get(canMakeRecipe) ?? 0) - 1);

        if (indegrees.get(canMakeRecipe) === 0) {
          nextQueue.push(canMakeRecipe);
        }
      }
    }
    queue = nextQueue;
  }

  // 진입 차수가 0인 레시피는 모두 만들 수 있는 레시피
  return recipes.filter((recipe) => indegrees.get(recipe) === 0);
}
