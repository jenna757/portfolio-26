import { useCallback, useEffect, useState } from 'react';

import CursorSilhouette from './components/CursorSilhouette';
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
    <div className="relative min-h-screen">
      <CursorSilhouette />
      <div className="relative z-10 flex min-h-screen flex-col lg:flex-row">
        <Header activePage={activePage} onNavigate={onNavigate} />
        <main className="flex-1 px-6 py-12 lg:px-14 lg:py-20">
          <div className="mx-auto max-w-2xl">
            <Content page={activePage} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
