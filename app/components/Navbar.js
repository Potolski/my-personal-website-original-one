'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINKS = [
  { href: '/', num: '01', label: 'home', key: 'home' },
  { href: '/work', num: '02', label: 'work', key: 'work' },
  { href: '/about', num: '03', label: 'about', key: 'about' },
  { href: '/contact', num: '04', label: 'contact', key: 'contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const currentKey =
    pathname === '/' ? 'home'
    : pathname.startsWith('/work') ? 'work'
    : pathname.startsWith('/about') ? 'about'
    : pathname.startsWith('/contact') ? 'contact'
    : null;

  return (
    <aside className="nav">
      <div className="brand">
        <span className="mono">~/david_potolski</span>
        <span className="name">David Potolski Lafetá</span>
        <span className="mono dim">senior software engineer</span>
      </div>
      <ul className="nav-list">
        {LINKS.map((l) => (
          <li key={l.key}>
            <Link
              href={l.href}
              {...(currentKey === l.key ? { 'aria-current': 'page' } : {})}
            >
              <span className="num">{l.num}</span>
              <span className="ch"></span>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="nav-meta">
        <div>florianópolis · brazil</div>
        <div>utc−3 · en · pt</div>
      </div>
    </aside>
  );
}
