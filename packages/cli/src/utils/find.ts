export function findFirstPattern(str: string, regex: RegExp) {
  const matched = str.match(regex);
  return matched ? matched[0] : '';
}
