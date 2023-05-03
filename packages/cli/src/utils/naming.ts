export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.substring(1);
}

export function kebabcase(...strs: string[]) {
  return strs.map((str) => str.toLowerCase()).join('-');
}
