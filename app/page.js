import Link from 'next/link';
import Navbar from './components/Navbar';
import Terminal from './components/Terminal';
import Reveal from './components/Reveal';
import Pinboard from './components/Pinboard';

export default function HomePage() {
  return (
    <div className="page" data-screen-label="Home">
      <Navbar />
      <main className="home">
        <section className="hero">
          <div className="hero-left">
            <Terminal />

            <h1 data-reveal>
              Engineer<br />
              of <em>onchain</em><br />
              systems.
            </h1>

            <p className="lede" data-reveal>
              I&apos;m <b>David Potolski</b> — a <b>senior blockchain engineer</b> and <b>technical lead</b>.
              8+ years shipping smart contracts, DeFi protocols and zk infrastructure across multi-chain
              ecosystems. Core Technical Lead at <b>Syscoin</b>, co-founder of <b>Kmino</b> — a product
              studio building our own things in Web3, Fintech and AI, with AI-assisted engineering
              embedded in every step.
            </p>

            <div className="meta-row" data-reveal>
              <div className="cell">
                <div className="k">Capital covered</div>
                <div className="v">$20M<span className="unit">+</span></div>
              </div>
              <div className="cell">
                <div className="k">Years in industry</div>
                <div className="v">8<span className="unit">+ yrs</span></div>
              </div>
              <div className="cell">
                <div className="k">Based</div>
                <div className="v">Florianópolis<span className="unit"> / BR</span></div>
              </div>
            </div>
          </div>

          <div className="hero-right" data-reveal>
            <div className="frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/hero-portrait.jpeg" alt="David Potolski presenting Lunos at Devcon" />
            </div>
            <span className="badge">portrait / devcon 2025</span>
            <span className="tag">david · Pitching to investors</span>
          </div>
        </section>

        <section className="flow" data-reveal aria-label="Site sections">
          <Link className="flow-card" href="/work">
            <span className="f-idx">02 / next</span>
            <span className="f-title">Work</span>
            <span className="f-desc">The full timeline — 8+ years across Kmino, Syscoin, Lunos, Clevertech, Brick Abode and more. Plus certifications &amp; awards.</span>
            <span className="f-meta"><span>6 companies</span>·<span>AI-assisted delivery</span></span>
            <span className="f-arrow">↗</span>
          </Link>
          <Link className="flow-card" href="/about">
            <span className="f-idx">03 / next</span>
            <span className="f-title">About</span>
            <span className="f-desc">Bio, photos from hackathons, conferences and mentoring sessions, and a closer look at what I actually work on.</span>
            <span className="f-meta"><span>bio</span>·<span>events</span>·<span>off-keyboard</span></span>
            <span className="f-arrow">↗</span>
          </Link>
          <Link className="flow-card" href="/contact">
            <span className="f-idx">04 / next</span>
            <span className="f-title">Contact</span>
            <span className="f-desc">Email, LinkedIn, GitHub and the full CV in PDF. If you&apos;re building something ambitious, reach out.</span>
            <span className="f-meta"><span>email</span>·<span>linkedin</span>·<span>cv.pdf</span></span>
            <span className="f-arrow">↗</span>
          </Link>
        </section>

        <section className="selected" data-reveal>
          <div className="head">
            <span className="lbl">// selected projects</span>
            <h2>Shipped.</h2>
            <Link className="more mono link" href="/work">all work →</Link>
          </div>

          <div className="proj-grid">
            <article className="proj">
              <span className="idx">SP/01</span>
              <h3 className="proj-name">zkSYS &amp; Rollux</h3>
              <p className="proj-desc">Coordinated the zkSYS testnet launch and a multi-chain architecture combining UTXO, EVM and zk scalability.</p>
              <div className="proj-meta"><span>2023–now</span><span className="tag">zk · L2 · architecture</span></div>
            </article>
            <article className="proj">
              <span className="idx">SP/02</span>
              <h3 className="proj-name">Lunos</h3>
              <p className="proj-desc">Smart-contract architecture for decentralized risk management. $20M+ in underwriting capacity, with EigenLayer AVS integration.</p>
              <div className="proj-meta"><span>2024–now</span><span className="tag">solidity · defi · avs</span></div>
            </article>
            <article className="proj">
              <span className="idx">SP/03</span>
              <h3 className="proj-name">Pegasys.fi</h3>
              <p className="proj-desc">Uniswap v3 + Aave forks on Syscoin &amp; Rollux. Directed DeFi protocol engineering and Aave-fork extensions.</p>
              <div className="proj-meta"><span>2023–now</span><span className="tag">amm · lending</span></div>
            </article>
            <article className="proj">
              <span className="idx">SP/04</span>
              <h3 className="proj-name">Pali Wallet</h3>
              <p className="proj-desc">Non-custodial wallet (browser extension + mobile) for the Syscoin multi-chain ecosystem.</p>
              <div className="proj-meta"><span>2023–now</span><span className="tag">wallet · infra</span></div>
            </article>
          </div>
        </section>

        <div className="cta-tail" data-reveal>
          <p className="line">Want the <em>long version</em>?<br />The CV is one click away.</p>
          <Link className="cta-link" href="/contact">contact &amp; cv →</Link>
        </div>
      </main>
      <Pinboard />
      <Reveal />
    </div>
  );
}
