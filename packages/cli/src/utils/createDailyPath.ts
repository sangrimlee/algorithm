import path from 'node:path';

export function createDailyPath(outputDir: string, date: string) {
  const [year, month, day] = date.split('-');
  return path.join(
    process.cwd(),
    outputDir,
    `${year}-${month.padStart(2, '0')}`,
    day.padStart(2, '0'),
  );
}
