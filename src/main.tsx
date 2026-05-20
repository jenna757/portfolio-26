import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import ScrollControls from './components/ScrollControls.tsx';
import WorksPage from './works/WorksPage.tsx';
import TheRoPage from './works/projects/the-ro/TheRoPage.tsx';
import { getWorkProjectSlug, isWorksPagePath } from './routes.ts';
import { initTheme } from './theme.ts';

initTheme();

function Root() {
  const [pathname, setPathname] = useState(() => window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  return (
    <>
      <ScrollControls />
      {getWorkProjectSlug(pathname) === 'the-ro' ? (
        <TheRoPage />
      ) : isWorksPagePath(pathname) ? (
        <WorksPage />
      ) : (
        <App />
      )}
    </>
  );
}

const rootEl = document.getElementById('root');
if (!rootEl) {
  throw new Error('Root element #root not found');
}

createRoot(rootEl).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
