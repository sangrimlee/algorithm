/**
 * 1418. Display Table of Food Orders in a Restaurant
 * https://leetcode.com/problems/display-table-of-food-orders-in-a-restaurant
 */
export function displayTable(orders: string[][]): string[][] {
  const foods = new Set<string>();
  const tables = new Map<string, Map<string, number>>();
  for (const [, tableNumber, food] of orders) {
    const table = tables.get(tableNumber) ?? new Map<string, number>();
    table.set(food, (table.get(food) ?? 0) + 1);
    tables.set(tableNumber, table);
    foods.add(food);
  }

  const allFoods = [...foods].sort();
  const allTableNumbers = [...tables.keys()].sort((a, b) => parseInt(a) - parseInt(b));

  const answer: string[][] = [['Table', ...allFoods]];
  for (const tableNumber of allTableNumbers) {
    const table = tables.get(tableNumber);
    if (!table) continue;
    const row: string[] = [tableNumber];
    for (const food of allFoods) {
      const price = table.get(food) ?? 0;
      row.push(price.toString());
    }
    answer.push(row);
  }
  return answer;
}
