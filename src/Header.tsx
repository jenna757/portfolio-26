import Menu from './Menu';
import type { Page } from './nav';

type HeaderProps = {
  activePage: Page;
  onNavigate: (page: Page) => void;
};

const Header = ({ activePage, onNavigate }: HeaderProps) => {
  return (
    <header className="flex shrink-0 flex-col justify-between gap-10 border-b border-white/5 px-6 py-10 lg:sticky lg:top-0 lg:h-screen lg:w-[min(100%,17rem)] lg:border-b-0 lg:border-r lg:border-white/5 lg:px-8 lg:py-16 xl:w-72">
      <div>
        <p className="font-semibold tracking-tight text-heading">Portfolio</p>
        <p className="mt-2 text-sm text-heading/85">Frontend</p>
        <p className="mt-4 max-w-[16rem] text-sm leading-relaxed text-muted">
          웹을 위한 접근성과 디테일을 중시하는 인터페이스를 만듭니다.
        </p>
      </div>
      <Menu activePage={activePage} onNavigate={onNavigate} />
      <p className="hidden text-xs text-muted/70 lg:block">© {new Date().getFullYear()}</p>
    </header>
  );
};

export default Header;
