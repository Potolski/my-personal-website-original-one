import Navbar from './components/Navbar';

export default function NotFound() {
  return (
    <div className="page">
      <Navbar />
      <main>
        <header className="page-head">
          <span className="idx">—</span>
          <h1>404.</h1>
          <span className="sub">page not found</span>
        </header>
        <p className="contact-lede">This page doesn&apos;t <em>exist</em>. Let&apos;s get you back home.</p>
        <a className="cta-btn" href="/">go home →</a>
      </main>
    </div>
  );
}
