import type { ReactNode } from 'react';

/** brittanychiang.com Projects — ul.group/list */
export const ProjectList = ({ children }: { children: ReactNode }) => (
  <ul className="group/list">{children}</ul>
);
