import fs from 'node:fs/promises';
import path from 'node:path';

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

export function getFileName(filePath: string): string {
  return path.basename(filePath, path.extname(filePath));
}

export async function readDir(dirPath: string, extension: `.${string}`): Promise<string[]> {
  const isExist = await exists(dirPath);
  if (!isExist) {
    return [];
  }
  const files = await fs.readdir(dirPath);
  return files.filter((file) => path.extname(file) === extension);
}
