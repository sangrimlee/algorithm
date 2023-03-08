import { CodingSite } from '@/types';

export function createFileName(id: string, codingSite: CodingSite) {
  return {
    fileName: `${codingSite.toLocaleLowerCase()}-${id}.ts`,
    testFileName: `${codingSite.toLocaleLowerCase()}-${id}.test.ts`,
  };
}
