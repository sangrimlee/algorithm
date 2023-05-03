export function findFirstMatch(str: string, regex: RegExp) {
  const matched = str.match(regex);
  return matched ? matched[0] : '';
}
