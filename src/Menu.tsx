import { menuItems, type Page } from './nav';

type MenuProps = {
  activePage: Page;
  onNavigate: (page: Page) => void;
};

const linkBase =
  'group flex items-center gap-2.5 py-2 text-xs font-semibold uppercase tracking-widest transition-colors';

const Menu = ({ activePage, onNavigate }: MenuProps) => {
  return (
    <nav aria-label="주요 섹션">
      <ul className="flex flex-col gap-1">
        {menuItems.map(({ id, label }) => {
          const active = activePage === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`${linkBase} ${active ? 'text-accent' : 'text-muted hover:text-heading'}`}
                aria-current={active ? 'page' : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(id);
                }}
              >
                <span
                  className={`h-px shrink-0 bg-current transition-all motion-reduce:transition-none ${active ? 'w-8 opacity-100' : 'w-6 opacity-0 group-hover:w-8 group-hover:opacity-60'}`}
                  aria-hidden
                />
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
