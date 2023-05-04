import { existsSync } from 'node:fs';
import fs from 'node:fs/promises';
import path from 'node:path';

/**
 * 주어진 경로에 주어진 데이터의 파일을 생성
 * 기존의 `writeFile`과 다르게, 해당하는 파일의 경로(디렉터리)가 존재하지 않는다면 생성 후 파일 생성
 *
 * @param filePath 생성할 파일 경로
 * @param data 파일 데이터
 */
export async function ensureWriteFile(filePath: string, data: string) {
  const dirPath = path.dirname(filePath);
  if (!existsSync(dirPath)) {
    await fs.mkdir(dirPath, { recursive: true });
  }
  await fs.writeFile(filePath, data, 'utf-8');
}

/**
 * 주어진 경로의 파일을 UTF-8 포맷으로 읽음
 *
 * @param filePath 파일 경로
 * @returns {Promise<string>} 전체 파일의 문자열 타입의 데이터
 */
export function readFile(filePath: string) {
  return fs.readFile(filePath, 'utf-8');
}

/**
 * 주어진 경로에 주어진 객체 형식의 JSON 파일 생성
 *
 * @param filePath 생성할 파일 경로
 * @param data 파일 데이터
 */
export async function ensureWriteJson<O extends object>(filePath: string, object: O) {
  const dirPath = path.dirname(filePath);
  if (!existsSync(dirPath)) {
    await fs.mkdir(dirPath, { recursive: true });
  }
  await fs.writeFile(filePath, JSON.stringify(object, null, 2), 'utf-8');
}
