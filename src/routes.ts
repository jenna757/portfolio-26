export type WorkProjectSlug = 'the-ro';

export function getWorkProjectSlug(pathname: string): WorkProjectSlug | null {
  const normalized = pathname.replace(/\/+$/, '') || '/';
  const match = normalized.match(/^\/works\/([^/]+)$/);
  if (!match) return null;
  if (match[1] === 'the-ro') return 'the-ro';
  return null;
}

export function isWorksPagePath(pathname: string): boolean {
  const normalized = pathname.replace(/\/+$/, '') || '/';
  return normalized === '/works';
}
