'use client';

import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const root = document.documentElement;

    let W = 0, H = 0;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    let mx = 0, my = 0, tx = 0, ty = 0, t = 0;
    let raf = 0;

    const resize = () => {
      W = canvas.width = window.innerWidth * DPR;
      H = canvas.height = window.innerHeight * DPR;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
    };
    resize();

    const onMove = (e) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 20;
      my = (e.clientY / window.innerHeight - 0.5) * 20;
    };

    const draw = () => {
      t += 0.003;
      tx += (mx - tx) * 0.05;
      ty += (my - ty) * 0.05;
      ctx.clearRect(0, 0, W, H);

      const step = 28 * DPR;
      const isDark = root.getAttribute('data-theme') === 'dark';
      const base = isDark ? [236, 235, 230] : [20, 19, 18];
      ctx.fillStyle = `rgba(${base[0]}, ${base[1]}, ${base[2]}, 0.18)`;

      const cols = Math.ceil(W / step) + 2;
      const rows = Math.ceil(H / step) + 2;
      const offX = (tx * DPR) + Math.sin(t) * 4;
      const offY = (ty * DPR) + Math.cos(t * 0.8) * 4;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * step + offX;
          const y = j * step + offY;
          const d = Math.hypot(x - W / 2, y - H / 2);
          const f = 1 - Math.min(1, d / (Math.max(W, H) * 0.55));
          const r = 0.9 * DPR * (0.4 + f * 0.9);
          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMove);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return <canvas ref={ref} className="bg-canvas" aria-hidden="true" />;
}
