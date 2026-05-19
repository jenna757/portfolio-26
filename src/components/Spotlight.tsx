import { useEffect, useRef } from 'react';

/**
 * brittanychiang.com 과 동일한 스포트라이트: 600px 원형 radial-gradient,
 * 중심은 마우스(client → 레이어 로컬 좌표), 색은 rgba(29, 78, 216, 0.15) → transparent 80%
 * @see https://brittanychiang.com/
 */
function spotlightColor() {
  return getComputedStyle(document.documentElement).getPropertyValue('--color-spotlight').trim() || 'rgb(29 78 216 / 0.15)';
}

function setSpotlightBackground(el: HTMLElement, clientX: number, clientY: number) {
  const { left, top } = el.getBoundingClientRect();
  const x = clientX - left;
  const y = clientY - top;
  el.style.background = `radial-gradient(600px circle at ${x}px ${y}px, ${spotlightColor()}, transparent 80%)`;
}

const Spotlight = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const onMove = (e: MouseEvent) => {
      setSpotlightBackground(el, e.clientX, e.clientY);
    };

    const onThemeChange = () => {
      setSpotlightBackground(el, window.innerWidth / 2, window.innerHeight / 2);
    };

    const themeObserver = new MutationObserver(onThemeChange);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    window.addEventListener('mousemove', onMove, { passive: true });
    setSpotlightBackground(el, window.innerWidth / 2, window.innerHeight / 2);

    return () => {
      window.removeEventListener('mousemove', onMove);
      themeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="spotlight-overlay pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
    />
  );
};

export default Spotlight;
