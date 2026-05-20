import { createContext, useContext, type ReactNode } from 'react';

export type ProjectListColumns = 1 | 2;

const ProjectListContext = createContext<ProjectListColumns>(1);

export const useProjectListColumns = () => useContext(ProjectListContext);

type ProjectListProps = {
  children: ReactNode;
  /** 2: 한 row에 두 컬럼 (sm 이상). Works 전체 목록 등에 사용 */
  columns?: ProjectListColumns;
};

export const ProjectList = ({ children, columns = 1 }: ProjectListProps) => (
  <ProjectListContext.Provider value={columns}>
    <ul className={columns === 2 ? 'group/list grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2' : 'group/list'}>
      {children}
    </ul>
  </ProjectListContext.Provider>
);
