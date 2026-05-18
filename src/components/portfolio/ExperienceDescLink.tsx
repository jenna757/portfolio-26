import type { ReactNode } from 'react';

export type ExperienceDescLinkProps = {
  href: string;
  children: ReactNode;
};

export const ExperienceDescLink = ({ href, children }: ExperienceDescLinkProps) => (
  <a
    href={href}
    className="font-medium text-accent underline decoration-accent/40 underline-offset-2 hover:text-accent/90"
    target="_blank"
    rel="noreferrer noopener"
  >
    {children}
  </a>
);
