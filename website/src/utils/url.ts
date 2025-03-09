export function urljoin(base: string, ...paths: string[]): URL {
  const url = new URL(base);
  const pathname = [url.pathname, ...paths]
    .map((path) => path.replace(/\/+$/, '').replace(/^\/+/, ''))
    .join('/')
    .replace(/([^:])\/+/g, '$1/');
  return new URL(pathname, url.origin);
}
