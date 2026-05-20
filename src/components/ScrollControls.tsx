import { useCallback, useEffect, useState } from 'react';

function scrollBehavior(): ScrollBehavior {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
}

const SCROLL_EDGE_THRESHOLD = 48;

const buttonClassName =
  'flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border-subtle bg-navy-panel/90 text-muted shadow-lg backdrop-blur-sm transition-[color,border-color] hover:border-border-subtle-hover hover:text-accent focus-visible:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none';

const iconClassName = 'pointer-events-none h-5 w-5';

const ScrollControls = () => {
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(false);

  const updateScrollState = useCallback(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    setCanScrollUp(scrollTop > SCROLL_EDGE_THRESHOLD);
    setCanScrollDown(scrollTop + clientHeight < scrollHeight - SCROLL_EDGE_THRESHOLD);
  }, []);

  useEffect(() => {
    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);
    return () => {
      window.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: scrollBehavior() });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: scrollBehavior(),
    });
  };

  if (!canScrollUp && !canScrollDown) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 md:bottom-8 md:right-8"
      role="group"
      aria-label="페이지 스크롤"
    >
      {canScrollUp && (
        <button
          type="button"
          onClick={scrollToTop}
          className={buttonClassName}
          aria-label="맨 위로"
          title="맨 위로"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={iconClassName}
            aria-hidden
          >
            <path
              fillRule="evenodd"
              d="M9.47 6.47a.75.75 0 011.06 0l4.25 4.25a.75.75 0 11-1.06 1.06L10 8.061 6.28 11.78a.75.75 0 11-1.06-1.06l4.25-4.25z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
      {canScrollDown && (
        <button
          type="button"
          onClick={scrollToBottom}
          className={buttonClassName}
          aria-label="맨 아래로"
          title="맨 아래로"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={iconClassName}
            aria-hidden
          >
            <path
              fillRule="evenodd"
              d="M5.47 8.47a.75.75 0 011.06 0L10 11.939l3.47-3.47a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ScrollControls;
