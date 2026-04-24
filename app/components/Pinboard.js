'use client';

import { useCallback, useEffect, useState } from 'react';

const photos = [
  {
    src: '/images/FUNSuihubWorkshopDubai2025.JPG',
    alt: 'Running a workshop at SuiHub Dubai, 2025',
    caption: "suihub dubai, '25 — desert outside, rollups on screen.",
    tilt: '-3.5deg',
  },
  {
    src: '/images/FUNEigenLayerDinnerDevCon.JPG',
    alt: 'EigenLayer dinner at Devcon',
    caption: 'devcon, late dinner — restaking talk over pasta.',
    tilt: '2.5deg',
  },
  {
    src: '/images/FUNJapan2025.JPG',
    alt: 'Japan, 2025',
    caption: "tokyo, '25 — ramen before rollups.",
    tilt: '-1.8deg',
  },
  {
    src: '/images/FUNSingingInABar2022.JPEG',
    alt: 'Singing in a bar, 2022',
    caption: "bar, '22 — mic found me. no survivors.",
    tilt: '4deg',
  },
  {
    src: '/images/FUNMyCatsPanAndNina.png',
    alt: 'Pan and Niña, my cats',
    caption: 'pan & niña — the real code reviewers.',
    tilt: '-4deg',
  },
  {
    src: '/images/FUNRockInRIO.JPEG',
    alt: 'Rock in Rio festival',
    caption: 'rock in rio — somewhere between sets.',
    tilt: '-2.8deg',
  },
];

export default function Pinboard() {
  const [openIdx, setOpenIdx] = useState(null);
  const close = useCallback(() => setOpenIdx(null), []);

  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') setOpenIdx((i) => (i + 1) % photos.length);
      if (e.key === 'ArrowLeft') setOpenIdx((i) => (i - 1 + photos.length) % photos.length);
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [openIdx, close]);

  const active = openIdx === null ? null : photos[openIdx];

  return (
    <>
      <aside className="pinboard" aria-label="Off-keyboard">
        <div className="pin-head">
          <span className="lbl">// off-keyboard</span>
          <span className="pin-sub mono dim">stills from the road</span>
        </div>

        <div className="pin-grid">
          {photos.map((p, i) => (
            <figure key={p.src} className="pin" style={{ '--tilt': p.tilt }}>
              <button
                type="button"
                className="photo"
                onClick={() => setOpenIdx(i)}
                aria-label={`Enlarge photo: ${p.alt}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.src}
                  alt={p.alt}
                  style={p.objectPosition ? { objectPosition: p.objectPosition } : undefined}
                />
              </button>
              <figcaption>{p.caption}</figcaption>
            </figure>
          ))}
        </div>
      </aside>

      {active && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onClick={close}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={close}
            aria-label="Close"
          >
            ×
          </button>
          <figure className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={active.src} alt={active.alt} />
            <figcaption>{active.caption}</figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
