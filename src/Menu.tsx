import { menuItems, type Page } from './nav';

type MenuProps = {
  activePage: Page;
  onNavigate: (page: Page) => void;
};

const linkBase =
  'group flex items-center py-3 text-xs font-bold uppercase tracking-widest transition-colors';

function NavLinks({ activePage, onNavigate }: MenuProps) {
  return (
    <>
      {menuItems.map(({ id, label }) => {
        const active = activePage === id;
        return (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`${linkBase} ${active ? 'text-heading' : 'text-muted hover:text-heading group-focus-visible:text-heading'}`}
              aria-current={active ? 'page' : undefined}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(id);
              }}
            >
              <span
                className={`mr-4 h-px bg-current transition-all motion-reduce:transition-none ${active ? 'w-16 bg-heading' : 'w-8 bg-muted group-hover:w-16 group-hover:bg-heading group-focus-visible:w-16 group-focus-visible:bg-heading'}`}
                aria-hidden
              />
              {label}
            </a>
          </li>
        );
      })}
    </>
  );
}

const Menu = ({ activePage, onNavigate }: MenuProps) => {
  return (
    <>
      <nav className="mt-8 lg:hidden" aria-label="주요 섹션">
        <ul className="w-max">
          <NavLinks activePage={activePage} onNavigate={onNavigate} />
        </ul>
      </nav>
      <nav className="mt-16 hidden lg:block" aria-label="주요 섹션">
        <ul className="w-max">
          <NavLinks activePage={activePage} onNavigate={onNavigate} />
        </ul>
      </nav>
    </>
  );
};

export default Menu;
