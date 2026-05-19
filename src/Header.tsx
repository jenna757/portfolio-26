import Menu from './Menu';
import ThemeToggle from './components/ThemeToggle';
import type { Page } from './nav';

const socialLinks = [
  {
    href: '',
    label: 'GitHub',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58 0-.29-.01-1.13-.01-2.2-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.35-1.76-1.35-1.76-1.17-.8.09-.78.09-.78 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.27-5.47-1.33-5.47-5.29 0-1.17.42-2.12 1.11-2.87-.11-.27-.48-1.36.11-2.83 0 0 .91-.29 2.98 1.14.86-.24 1.78-.36 2.7-.37.92.01 1.84.13 2.7.37 2.07-1.43 2.98-1.14 2.98-1.14.59 1.47.22 2.56.11 2.83.69.75 1.11 1.7 1.11 2.87 0 3.97-2.8 5.02-5.48 5.29.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.29 0 .32.21.69.8.57C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
      </svg>
    ),
  },
  {
    href: '',
    label: 'Tistory',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
        <path
          fillRule="evenodd"
          transform="scale(0.48)"
          d="M50 25c0 13.807-11.193 25-25 25S0 38.807 0 25 11.193 0 25 0s25 11.193 25 25M25.544 14.674a2.717 2.717 0 1 0 0 5.435 2.717 2.717 0 0 0 0-5.435M16.848 14.674a2.717 2.717 0 1 0 0 5.435 2.717 2.717 0 0 0 0-5.435M34.24 14.674a2.718 2.718 0 1 0 0 5.435 2.718 2.718 0 0 0 0-5.435M25.544 23.37a2.718 2.718 0 1 0 0 5.435 2.718 2.718 0 0 0 0-5.435M25.544 32.065a2.718 2.718 0 1 0 0 5.436 2.718 2.718 0 0 0 0-5.436"
        />
      </svg>
    ),
  },
] as const;

type HeaderProps = {
  activePage: Page;
  onNavigate: (page: Page) => void;
};

const Header = ({ activePage, onNavigate }: HeaderProps) => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <p className="text-4xl font-bold tracking-tight text-heading sm:text-5xl">최진슬</p>
        <p className="mt-3 text-lg font-medium tracking-tight text-heading sm:text-xl">UI/UX Developer</p>
        <p className="mt-4 max-w-xs leading-normal">
          웹을 위한 접근성과 <br />
          디테일을 중시하는 인터페이스를 만듭니다.
        </p>
      </div>
      <Menu activePage={activePage} onNavigate={onNavigate} />
      <div className="mt-8 lg:mt-0">
        <div className="mb-6 flex items-center gap-3.5">
          <ThemeToggle />
          <ul className="flex items-center gap-3.5" aria-label="외부 링크">
            {socialLinks.map(({ href, label, icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted transition-colors hover:text-accent focus-visible:text-accent"
                >
                  <span className="sr-only">{label}</span>
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-xs text-muted/70">© {new Date().getFullYear()}. 최진슬 All rights reserved.</p>
      </div>
    </header>
  );
};

export default Header;
