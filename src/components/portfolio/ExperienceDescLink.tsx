import type { ReactNode } from 'react';

export type ExperienceDescLinkProps = {
  href: string;
  children: ReactNode;
};

export const ExperienceDescLink = ({ href, children }: ExperienceDescLinkProps) => (
  <a
    href={href}
    className="font-medium text-muted underline underline-offset-2 hover:text-muted/90"
    target="_blank"
    rel="noreferrer noopener"
  >
    {children}
  </a>
);
