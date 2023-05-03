import path from 'node:path';

export function getYearMonthAndDay(date: Date) {
  return {
    year: date.getFullYear().toString(),
    month: (date.getMonth() + 1).toString().padStart(2, '0'),
    day: date.getDate().toString().padStart(2, '0'),
  };
}

export function getDateString(date: Date) {
  const { year, month, day } = getYearMonthAndDay(date);

  return `${year}-${month}-${day}`;
}

export function getDatePath(date: Date, ...paths: string[]) {
  const { year, month, day } = getYearMonthAndDay(date);

  return path.join(...paths, `${year}-${month}`, day);
}
