'use client';

import { useEffect, useRef } from 'react';

const LINES = [
  { t: '$ whoami', c: '' },
  { t: 'david_potolski_lafeta', c: 'dim', delay: 200 },
  { t: '$ cat role.txt', c: '' },
  { t: 'senior software engineer — zk systems · defi · smart contracts', c: 'dim', delay: 160 },
];

export default function Terminal() {
  const ref = useRef(null);

  useEffect(() => {
    const term = ref.current;
    if (!term) return;

    const KEY = 'dp-term-done';
    let cancelled = false;
    term.innerHTML = '';

    if (sessionStorage.getItem(KEY)) {
      term.innerHTML =
        LINES.map((l) => `<span class="line ${l.c}">${l.t}</span>`).join('') +
        '<span class="cursor"></span>';
      return;
    }

    let i = 0;
    const writeLine = () => {
      if (cancelled) return;
      if (i >= LINES.length) {
        const cur = document.createElement('span');
        cur.className = 'cursor';
        term.appendChild(cur);
        try { sessionStorage.setItem(KEY, '1'); } catch {}
        return;
      }
      const { t, c = '', delay = 0 } = LINES[i];
      const span = document.createElement('span');
      span.className = 'line ' + c;
      term.appendChild(span);
      let n = 0;
      const isCmd = t.startsWith('$');
      const speed = isCmd ? 18 : 10;
      const tick = () => {
        if (cancelled) return;
        span.textContent = t.slice(0, n++);
        if (n <= t.length) setTimeout(tick, speed);
        else {
          i++;
          setTimeout(writeLine, delay + 100);
        }
      };
      tick();
    };
    writeLine();

    return () => { cancelled = true; };
  }, []);

  return <pre ref={ref} className="term" id="term" aria-hidden="true" />;
}
