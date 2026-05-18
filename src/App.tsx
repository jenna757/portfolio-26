import { useCallback, useEffect, useState } from 'react';

import Spotlight from './components/Spotlight';
import Header from './Header';
import Content from './Content';

import { menuItems, type Page } from './nav';

import './main.css';

function pageFromHash(): Page {
  const raw = window.location.hash.replace(/^#/, '').toLowerCase();
  if (raw === 'works' || raw === 'projects') return 'works';
  if (raw === 'career' || raw === 'carrer' || raw === 'experience') return 'career';
  if (raw === 'about') return 'about';
  return 'about';
}

function scrollBehavior(): ScrollBehavior {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
}

function scrollToSection(page: Page, behavior?: ScrollBehavior) {
  document.getElementById(page)?.scrollIntoView({
    behavior: behavior ?? scrollBehavior(),
    block: 'start',
  });
}

function App() {
  const [activePage, setActivePage] = useState<Page>(pageFromHash);

  useEffect(() => {
    const page = pageFromHash();
    setActivePage(page);
    if (window.location.hash) {
      requestAnimationFrame(() => scrollToSection(page, 'auto'));
    }
  }, []);

  useEffect(() => {
    const onHashChange = () => {
      const page = pageFromHash();
      setActivePage(page);
      scrollToSection(page);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    const elements = menuItems
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el != null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;

        const primary = visible.reduce((best, entry) =>
          entry.intersectionRatio > best.intersectionRatio ? entry : best,
        );

        const page = primary.target.id as Page;
        if (!menuItems.some((item) => item.id === page)) return;

        setActivePage(page);
        const next = `#${page}`;
        if (window.location.hash !== next) {
          history.replaceState(null, '', next);
        }
      },
      {
        rootMargin: '-10% 0px -55% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const onNavigate = useCallback((page: Page) => {
    if (window.location.hash === `#${page}`) {
      scrollToSection(page);
      return;
    }
    window.location.hash = page;
  }, []);

  return (
    <div className="group/spotlight relative min-h-screen">
      <Spotlight />
      <div className="relative z-40 mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4 max-w-screen-xl">
          <Header activePage={activePage} onNavigate={onNavigate} />
          <main className="min-w-0 pt-24 lg:w-[52%] lg:py-24">
            <Content />
            <p className="mt-16 max-w-lg text-sm leading-relaxed text-muted">
              <span className="text-heading">Figma</span>에서 대략적인 디자인 구상을 하고,{' '}
              <span className="text-heading">Visual Studio Code</span>에서 직접 코딩을 하며
              <br />
              막힌 부분은 <span className="text-heading">Cursor</span>의 도움을 받아 코딩을 했습니다.
              <br />
              스타일은 <span className="text-heading">Tailwind(v4.0)</span>로 하였고,{' '}
              <span className="text-heading">Vite</span>를 사용하여 빌드하고{' '}
              <span className="text-heading">Vercel</span>로 배포했습니다.
              <br />
              모든 텍스트는 Interop 서체를 사용했습니다.
            </p>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
