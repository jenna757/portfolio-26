import { useCallback, useEffect, useState } from 'react';

import Spotlight from './components/Spotlight';
import Header from './Header';
import Content from './Content';

import type { Page } from './nav';

import './main.css';

function pageFromHash(): Page {
  const raw = window.location.hash.replace(/^#/, '').toLowerCase();
  if (raw === 'works' || raw === 'projects') return 'works';
  if (raw === 'career' || raw === 'carrer' || raw === 'experience') return 'career';
  if (raw === 'about') return 'about';
  return 'about';
}

function App() {
  const [activePage, setActivePage] = useState<Page>(pageFromHash);

  useEffect(() => {
    const onHashChange = () => setActivePage(pageFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const onNavigate = useCallback((page: Page) => {
    setActivePage(page);
    const next = `#${page}`;
    if (window.location.hash !== next) {
      window.location.hash = page;
    }
  }, []);

  return (
    <div className="group/spotlight relative min-h-screen">
      <Spotlight />
      {/* 헤더 : 본문 ≈ 3 : 7 */}
      <div className="relative z-40 mx-auto flex min-h-screen w-full max-w-screen-xl flex-col px-6 py-12 md:px-12 md:py-16 lg:flex-row lg:justify-between lg:gap-16 lg:py-0">
        <Header activePage={activePage} onNavigate={onNavigate} />
        <main className="min-w-0 w-full pt-12 lg:w-[70%] lg:shrink-0 lg:py-24">
          <Content page={activePage} />
        </main>
      </div>
    </div>
  );
}

export default App;
