export function getCurrentDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear().toString();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const date = currentDate.getDate().toString().padStart(2, '0');
  return [year, month, date].join('-');
}
