import fs from 'node:fs/promises';

export async function exists(dirOrFilePath: string): Promise<boolean> {
  try {
    await fs.access(dirOrFilePath);
    return true;
  } catch (_error) {
    return false;
  }
}

export function readFile(filePath: string): Promise<string> {
  return fs.readFile(filePath, 'utf-8');
}
