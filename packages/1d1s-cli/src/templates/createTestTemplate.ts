import { CodingSite } from '../enums';

export function createTestTemplate(codingSite: CodingSite, date: string, id: string) {
  return `describe('${date}: ${codingSite} ${id}', () => {
  test('Example 1', () => {});
  
  test('Example 2', () => {});
  
  test('Example 3', () => {});
});`;
}
