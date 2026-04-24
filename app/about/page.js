import Navbar from '../components/Navbar';
import Reveal from '../components/Reveal';
import EventSlideshow from '../components/EventSlideshow';

export const metadata = { title: 'About — David Potolski' };

const dubaiPhotos = [
  { src: '/images/dubai-presenting.jpeg', alt: 'Presenting the winning project at SuiHub Dubai', title: 'Demoing the protocol', meta: 'SuiHub · Dubai' },
  { src: '/images/dubai-room.jpeg', alt: 'The SuiHub hackathon room in Dubai', title: 'On the hackathon floor', meta: 'SuiHub HQ · Dubai, UAE' },
  { src: '/images/dubai-winner.jpeg', alt: 'Truth on Sui winner announcement', title: 'Winner announcement', meta: 'Swarm × SuiHub · on-site hackathon' },
  { src: '/images/dubai-presenting-closeup.jpeg', alt: 'Close-up of David presenting Sui Attestation Service', title: 'Pitch close-up', meta: 'Sui Attestation Service · live demo' },
];

const devconPhotos = [
  { src: '/images/devcon-1.jpeg', alt: 'David Potolski presenting Lunos at Devcon', title: 'Opening the pitch', meta: '“Securing the future of cross-chain value”' },
  { src: '/images/devcon-2.jpeg', alt: 'Lunos business model slide at Devcon', title: 'Business model', meta: 'Protocol revenue & POL' },
  { src: '/images/devcon-3.jpeg', alt: 'Lunos how it works slide at Devcon', title: 'How it works — end to end', meta: 'User stake → yield → payout' },
];

const monadPhotos = [
  { src: '/images/mentoring-3.jpeg', alt: 'Mentoring session at Monad Blitz', title: 'On-site mentoring', meta: 'Architecture reviews & scoping' },
  { src: '/images/mentoring-stage.jpeg', alt: 'Opening Monad Blitz on stage', title: 'Opening remarks', meta: 'Kicking off Blitz São Paulo' },
  { src: '/images/mentoring-group.jpeg', alt: 'Monad Blitz São Paulo group photo', title: 'The full cohort', meta: 'Monad Blitz · São Paulo' },
];

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

        <div className="events-head" data-reveal>
          <span className="kicker">// out in the world</span>
          <h2>Talks &amp; field notes.</h2>
        </div>

        <div className="event-block" data-reveal>
          <div className="event-head-title">
            <span className="kicker">01 / Dubai · UAE · 2025</span>
            <h3>&ldquo;Truth on Sui&rdquo; — 1st place, SuiHub on-site hackathon</h3>
          </div>
          <div className="event-head-body">
            <p>I won first place — <b>solo project</b> — at the on-site hackathon with <b>Sui Attestation Service</b>, a decentralized attestation infrastructure on Sui. Designed the smart-contract architecture and demoed the protocol to the judging panel.</p>
          </div>
          <EventSlideshow photos={dubaiPhotos} />
        </div>

        <div className="event-block" data-reveal>
          <div className="event-head-title">
            <span className="kicker">02 / Buenos Aires · Argentina · 2025</span>
            <h3>Lunos at Devcon — client &amp; investor pitch</h3>
          </div>
          <div className="event-head-body">
            <p>Pitched <b>Lunos</b> — a decentralized risk-management protocol for Web3 — to strategic partners and investors at <b>Ethereum&apos;s biggest conference: DevCon</b>. Walked through the architecture, the business model and the &ldquo;how it works&rdquo; flow for cross-chain coverage.</p>
          </div>
          <EventSlideshow photos={devconPhotos} />
        </div>

        <div className="event-block" data-reveal>
          <div className="event-head-title">
            <span className="kicker">03 / São Paulo &amp; Rio de Janeiro · Brazil · 2026</span>
            <h3>Mentoring at Monad Blitz Brazil</h3>
          </div>
          <div className="event-head-body">
            <p>Mentored a cohort of Brazilian Web3 builders through the <b>Monad Blitz</b> hackathon across São Paulo and Rio de Janeiro — reviewing smart-contract architectures, helping teams scope ambitious projects down to shippable demos, and kicking the events off from stage.</p>
          </div>
          <EventSlideshow photos={monadPhotos} />
        </div>
      </main>
      <Reveal />
    </div>
  );
}
