export type Page = 'about' | 'career' | 'works';

export const menuItems = [
  { id: 'about' as const, label: 'About' },
  { id: 'career' as const, label: 'Career' },
  { id: 'works' as const, label: 'Works' },
] satisfies ReadonlyArray<{ id: Page; label: string }>;
