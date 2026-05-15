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
      <div className="relative z-40 mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4 max-w-screen-xl">
          <Header activePage={activePage} onNavigate={onNavigate} />
          <main className="min-w-0 pt-24 lg:w-[52%] lg:py-24">
            <Content page={activePage} />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
