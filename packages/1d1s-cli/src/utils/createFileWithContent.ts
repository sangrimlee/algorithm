import fs from 'node:fs';
import path from 'node:path';

export function createFileWithContent(dir: string, fileName: string, content: string) {
  const writeStream = fs.createWriteStream(path.join(dir, fileName));
  writeStream.write(content, (error) => {
    if (error) console.error(error);
  });
  writeStream.end();
  return;
}
