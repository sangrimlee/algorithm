/**
 * 1507. Reformat Date
 * https://leetcode.com/problems/reformat-date
 */
export function reformatDate(date: string): string {
  const months = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12',
  } as const;
  const [day, month, year] = date.split(' ');
  return `${year}-${months[month as keyof typeof months]}-${day.slice(0, -2).padStart(2, '0')}`;
}
