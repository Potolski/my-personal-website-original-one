'use client';

import { useCallback, useEffect, useState } from 'react';

export default function EventSlideshow({ photos }) {
  const [idx, setIdx] = useState(0);
  const count = photos.length;
  const next = useCallback(() => setIdx((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setIdx((i) => (i - 1 + count) % count), [count]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [next, prev]);

  const current = photos[idx];

  return (
    <div className="event-slideshow">
      <div className="slide-frame">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={current.src} alt={current.alt} />
        {count > 1 && (
          <>
            <button type="button" className="slide-nav prev" onClick={prev} aria-label="Previous photo">
              ‹
            </button>
            <button type="button" className="slide-nav next" onClick={next} aria-label="Next photo">
              ›
            </button>
            <span className="slide-counter">
              {idx + 1} / {count}
            </span>
          </>
        )}
      </div>
      <div className="slide-caption">
        <h3>{current.title}</h3>
        <div className="meta">{current.meta}</div>
      </div>
      {count > 1 && (
        <div className="slide-dots" role="tablist" aria-label="Select photo">
          {photos.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              className={`slide-dot${i === idx ? ' active' : ''}`}
              onClick={() => setIdx(i)}
              aria-label={`Photo ${i + 1}`}
              aria-selected={i === idx}
            />
          ))}
        </div>
      )}
    </div>
  );
}
