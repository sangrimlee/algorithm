import { CodingSite } from '../enums';

export function createTestTemplate(date: string, codingSite: CodingSite, id: string) {
  return `describe('${date}: ${codingSite} ${id}', () => {
  test('Example 1', () => {});
  
  test('Example 2', () => {});
  
  test('Example 3', () => {});
});`;
}
