import Menu from './Menu';
import type { Page } from './nav';

type HeaderProps = {
  activePage: Page;
  onNavigate: (page: Page) => void;
};

const Header = ({ activePage, onNavigate }: HeaderProps) => {
  return (
    <header className="flex shrink-0 flex-col justify-between gap-8 border-b border-white/5 pb-10 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[30%] lg:shrink-0 lg:flex-col lg:justify-between lg:border-b-0 lg:border-r lg:border-white/5 lg:py-24">
      <div>
        <p className="text-4xl font-bold tracking-tight text-heading sm:text-5xl">최진슬</p>
        <p className="mt-2 text-2xl font-medium tracking-tight text-heading sm:text-2xl">Web Publisher</p>
        <p className="mt-4 max-w-xs text-base leading-normal text-muted sm:text-lg">
          웹을 위한 접근성과 <br />
          디테일을 중시하는 인터페이스를 만듭니다.
        </p>
      </div>
      <Menu activePage={activePage} onNavigate={onNavigate} />
      <p className="hidden text-xs text-muted/70 lg:block">© {new Date().getFullYear()}</p>
    </header>
  );
};

export default Header;
