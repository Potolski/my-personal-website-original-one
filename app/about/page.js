import Navbar from '../components/Navbar';
import Reveal from '../components/Reveal';

export const metadata = { title: 'About — David Potolski' };

export default function AboutPage() {
  return (
    <div className="page" data-screen-label="About">
      <Navbar />
      <main>
        <header className="page-head">
          <span className="idx">03 /</span>
          <h1>About.</h1>
          <span className="sub">bio · events · off-keyboard</span>
        </header>

        <section className="bio" data-reveal>
          <div className="prose">
            <p>I&apos;m a <b>senior blockchain engineer</b> and <b>technical lead</b> — 8+ years shipping smart contracts, DeFi protocols and zk infrastructure across multi-chain ecosystems. Most of it runs in <b>Solidity</b> and <b>TypeScript</b>, with whatever else the problem actually needs.</p>
            <p>Since December 2023 I&apos;ve been <b>Core Technical Lead</b> at <b>Syscoin</b> — from application-layer DeFi and wallet products (Pegasys, Pali) to core infrastructure and zk scaling (zkSYS, Rollux). In July 2025 I co-founded <b>Kmino</b>, a product studio designing, building and launching our own products across Web3, Fintech and AI.</p>
            <p><b>AI-assisted engineering</b> sits at the core of how I ship now — <b>Claude Code</b> with multi-agent orchestration (context-mode), Codex and Cursor across design, review, testing and documentation. Human in the loop; every change reviewed before it hits git.</p>
            <p>Dual citizen — <b>Brazil</b> and <b>Poland</b>. Based in Florianópolis.</p>
          </div>
          <figure className="portrait">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/profile-photo.jpeg" alt="David Potolski" />
          </figure>
        </section>

        <div className="events-head" data-reveal>
          <span className="kicker">// out in the world</span>
          <h2>Talks &amp; field notes.</h2>
        </div>

        <div className="event-block" data-reveal>
          <div className="event-head">
            <span className="kicker">01 / Dubai · UAE · 2025</span>
            <h3>&ldquo;Truth on Sui&rdquo; — 1st place, SuiHub on-site hackathon</h3>
            <p>I took first place — <b>solo project</b> — across all on-site hackathon submissions with <b>Sui Attestation Service</b>, a decentralized attestation infrastructure on Sui. Designed the smart-contract architecture and demoed the protocol to the judging panel.</p>
          </div>
          <div className="events">
            <article className="event large">
              <div className="ph">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/images/dubai-winner.jpeg" alt="Truth on Sui winner announcement: 1st Place — Sui Attestation Service" /></div>
              <div className="caption">
                <h3>Winner announcement</h3>
                <div className="meta">Swarm × SuiHub · on-site hackathon</div>
              </div>
            </article>
            <article className="event medium">
              <div className="ph">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/images/dubai-presenting.jpeg" alt="Presenting the winning project at SuiHub Dubai" /></div>
              <div className="caption">
                <h3>Demoing the protocol</h3>
                <div className="meta">SuiHub · Dubai</div>
              </div>
            </article>
            <article className="event half">
              <div className="ph">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/images/dubai-room.jpeg" alt="The SuiHub hackathon room in Dubai" /></div>
              <div className="caption">
                <h3>On the hackathon floor</h3>
                <div className="meta">SuiHub HQ · Dubai, UAE</div>
              </div>
            </article>
            <article className="event half">
              <div className="ph">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/images/dubai-presenting-closeup.jpeg" alt="Close-up of David presenting Sui Attestation Service at SuiHub Dubai" /></div>
              <div className="caption">
                <h3>Pitch close-up</h3>
                <div className="meta">Sui Attestation Service · live demo</div>
              </div>
            </article>
          </div>
        </div>

        <div className="event-block" data-reveal>
          <div className="event-head">
            <span className="kicker">02 / Buenos Aires · Argentina · 2025</span>
            <h3>Lunos at Devcon — client &amp; investor pitch</h3>
            <p>Pitched <b>Lunos</b> — a decentralized risk-management protocol for Web3 — to strategic partners and investors at <b>Ethereum&apos;s biggest conference</b>. Walked through the architecture, the business model and the &ldquo;how it works&rdquo; flow for cross-chain coverage.</p>
          </div>
          <div className="events">
            <article className="event half">
              <div className="ph">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/images/devcon-1.jpeg" alt="David Potolski presenting Lunos at Devcon" /></div>
              <div className="caption">
                <h3>Opening the pitch</h3>
                <div className="meta">&ldquo;Securing the future of cross-chain value&rdquo;</div>
              </div>
            </article>
            <article className="event half">
              <div className="ph">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/images/devcon-2.jpeg" alt="Lunos business model slide at Devcon" /></div>
              <div className="caption">
                <h3>Business model</h3>
                <div className="meta">Protocol revenue &amp; POL</div>
              </div>
            </article>
            <article className="event wide">
              <div className="ph">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/images/devcon-3.jpeg" alt="Lunos how it works slide at Devcon" /></div>
              <div className="caption">
                <h3>How it works — end to end</h3>
                <div className="meta">User stake → yield → payout</div>
              </div>
            </article>
          </div>
        </div>

        <div className="event-block" data-reveal>
          <div className="event-head">
            <span className="kicker">03 / São Paulo &amp; Rio de Janeiro · Brazil · 2026</span>
            <h3>Mentoring at Monad Blitz Brazil</h3>
            <p>Mentored a cohort of Brazilian Web3 builders through the <b>Monad Blitz</b> hackathon across São Paulo and Rio de Janeiro — reviewing smart-contract architectures, helping teams scope ambitious projects down to shippable demos, and kicking the events off from stage.</p>
          </div>
          <div className="events">
            <article className="event large">
              <div className="ph">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/images/mentoring-group.jpeg" alt="Monad Blitz São Paulo group photo" /></div>
              <div className="caption">
                <h3>The full cohort</h3>
                <div className="meta">Monad Blitz · São Paulo</div>
              </div>
            </article>
            <article className="event medium">
              <div className="ph">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/images/mentoring-stage.jpeg" alt="Opening Monad Blitz on stage" /></div>
              <div className="caption">
                <h3>Opening remarks</h3>
                <div className="meta">Kicking off Blitz São Paulo</div>
              </div>
            </article>
            <article className="event wide">
              <div className="ph">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/images/mentoring-3.jpeg" alt="Mentoring session at Monad Blitz" /></div>
              <div className="caption">
                <h3>On-site mentoring</h3>
                <div className="meta">Architecture reviews &amp; scoping</div>
              </div>
            </article>
          </div>
        </div>

        <section className="strip" data-reveal>
          <div className="cell"><h4>$20M<span className="accent">+</span></h4><p>Underwriting capacity covered</p></div>
          <div className="cell"><h4>1,400<span className="accent">+</span></h4><p>Tokens minted on mainnet</p></div>
          <div className="cell"><h4>8<span className="accent">+</span></h4><p>Years shipping production code</p></div>
          <div className="cell"><h4>BR · PL</h4><p>Dual citizen — EN · PT</p></div>
        </section>

        <section className="bits" data-reveal>
          <div className="lbl">Off-keyboard</div>
          <div className="col">
            <h3>What I&apos;m good at</h3>
            <ul>
              <li>Smart-contract design, security and gas optimization</li>
              <li>Architecture-to-roadmap across protocol, application and product layers</li>
              <li>AI-assisted engineering — multi-agent orchestration and LLM-driven workflows</li>
              <li>Multi-chain architecture: UTXO, EVM, zk and cross-chain integrations</li>
              <li>Cross-team alignment and release execution</li>
            </ul>
          </div>
          <div className="col">
            <h3>Education &amp; stack</h3>
            <ul>
              <li>Computer Engineering — Universidade de Brasília (2015–2019)</li>
              <li>Advanced English — Casa Thomas Jefferson (2008–2013)</li>
              <li>Solidity · TypeScript · Node.js · Hardhat · Foundry · Ethers.js</li>
              <li>EVM · UTXO · zkSync · Validium · EigenLayer / AVS</li>
              <li>Ethereum · Solana · Syscoin · Rollux</li>
            </ul>
          </div>
        </section>
      </main>
      <Reveal />
    </div>
  );
}
