import { useEffect, useRef } from 'react';

const LERP = 0.09;
const SILHOUETTE_W = 140;

/** Brittany Chiang 느낌의 네이비 톤 위를 부드럽게 따라오는 실루엣 레이어 */
const CursorSilhouette = () => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !wrapRef.current) return;

    const el = wrapRef.current;

    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    target.current = { x: cx, y: cy };
    pos.current = { x: cx, y: cy };
    el.style.setProperty('--sx', `${cx}px`);
    el.style.setProperty('--sy', `${cy}px`);

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * LERP;
      pos.current.y += (target.current.y - pos.current.y) * LERP;
      el.style.setProperty('--sx', `${pos.current.x}px`);
      el.style.setProperty('--sy', `${pos.current.y}px`);
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      aria-hidden
      className="cursor-silhouette pointer-events-none fixed inset-0 z-[1] overflow-hidden"
    >
      <div
        className="absolute will-change-transform"
        style={{
          width: SILHOUETTE_W,
          height: SILHOUETTE_W * 1.15,
          left: 'var(--sx, -9999px)',
          top: 'var(--sy, -9999px)',
          transform: 'translate(-50%, -55%)',
          opacity: 0.14,
          mixBlendMode: 'soft-light',
        }}
      >
        <svg
          viewBox="0 0 100 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
          className="h-full w-full text-accent drop-shadow-[0_0_28px_color-mix(in_oklab,var(--color-accent)_45%,transparent)]"
        >
          <ellipse cx="50" cy="24" rx="17" ry="20" fill="currentColor" fillOpacity={0.9} />
          <path
            fill="currentColor"
            fillOpacity={0.88}
            d="M50 42c-16 0-30 12-34 28l-4 22c-2 10 6 19 16 19h44c10 0 18-9 16-19l-4-22c-4-16-18-28-34-28Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default CursorSilhouette;
