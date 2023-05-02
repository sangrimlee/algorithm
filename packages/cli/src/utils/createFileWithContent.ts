import fs from 'node:fs/promises';
import path from 'node:path';

export function createFileWithContent(dir: string, fileName: string, content: string) {
  return fs.writeFile(path.join(dir, fileName), content);
}
