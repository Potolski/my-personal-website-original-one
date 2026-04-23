import Navbar from '../components/Navbar';
import Reveal from '../components/Reveal';
import CopyEmailButton from './CopyEmailButton';

export const metadata = { title: 'Contact — David Potolski' };

export default function ContactPage() {
  return (
    <div className="page" data-screen-label="Contact">
      <Navbar />
      <main>
        <header className="page-head">
          <span className="idx">04 /</span>
          <h1>Contact.</h1>
          <span className="sub">get in touch</span>
        </header>

        <p className="contact-lede" data-reveal>
          Open to <em>senior</em> engineering and technical-lead roles at the intersection of smart contracts, zk infrastructure and AI-assisted engineering.
        </p>

        <section className="channels" data-reveal>
          <div className="row">
            <div className="channel-k">Email</div>
            <div className="channel-v">
              <a className="link" href="mailto:davidpotolskilafeta@gmail.com">
                davidpotolskilafeta@gmail.com<span className="arrow">→</span>
              </a>
              <CopyEmailButton value="davidpotolskilafeta@gmail.com" />
            </div>
          </div>
          <div className="row">
            <div className="channel-k">LinkedIn</div>
            <div className="channel-v">
              <a className="link" href="https://www.linkedin.com/in/davidpotolskilafeta" target="_blank" rel="noopener noreferrer">
                /davidpotolskilafeta<span className="arrow">→</span>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="channel-k">GitHub</div>
            <div className="channel-v">
              <a className="link" href="https://github.com/Potolski" target="_blank" rel="noopener noreferrer">
                github.com/Potolski<span className="arrow">→</span>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="channel-k">Web</div>
            <div className="channel-v">
              <a className="link" href="https://davidpotolski.com" target="_blank" rel="noopener noreferrer">
                davidpotolski.com<span className="arrow">→</span>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="channel-k">Based in</div>
            <div className="channel-v">
              Florianópolis, Brazil <span className="secondary">utc−3 · en · pt</span>
            </div>
          </div>
          <div className="row">
            <div className="channel-k">Citizenship</div>
            <div className="channel-v">
              Brazil &amp; Poland <span className="secondary">dual citizen · EU-eligible</span>
            </div>
          </div>
        </section>

        <aside className="cta-card" data-reveal>
          <div>
            <h3>Prefer the long version?</h3>
            <p>Grab the full CV — roles, responsibilities, key contributions, stack and certifications, with dates.</p>
          </div>
          <a className="cta-btn" href="/david-potolski-resume.pdf" target="_blank" rel="noopener noreferrer">
            download cv.pdf →
          </a>
        </aside>

        <div className="sig">
          <span><span className="dot">●</span> david_potolski · 2026</span>
          <span>press <span className="kbd">t</span> to toggle theme</span>
        </div>
      </main>
      <Reveal />
    </div>
  );
}
