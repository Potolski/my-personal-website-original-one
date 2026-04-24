import Navbar from '../components/Navbar';
import Reveal from '../components/Reveal';
import TimelineItem from '../components/TimelineItem';

export const metadata = { title: 'Work — David Potolski' };

export default function WorkPage() {
  return (
    <div className="page" data-screen-label="Work">
      <Navbar />
      <main>
        <header className="page-head">
          <span className="idx">02 /</span>
          <h1>Work.</h1>
          <span className="sub">8+ years · smart contracts · zk · AI-assisted delivery</span>
        </header>

        <div className="tl" data-reveal>
          <TimelineItem
            yr="Apr 2023 — now"
            duration="3y 1m"
            company="Syscoin"
            pill="Core Technical Lead"
            role="Core Technical Lead (Dec 2023–now) · Senior Blockchain Developer (Apr–Dec 2023)"
            current
          >
            <p>Led technical direction across Syscoin&apos;s multi-layer ecosystem — from application-layer DeFi and wallet products (Pegasys, Pali Wallet) to core infrastructure and zk scaling (zkSYS, Rollux, core UTXO).</p>
            <ul>
              <li><span>Coordinated the launch of the <b>zkSYS testnet</b></span></li>
              <li><span>Led cross-functional alignment for a multi-chain architecture (UTXO + EVM + zk) — Bitcoin security, EVM compatibility, zk scalability</span></li>
              <li><span>Directed DeFi protocol engineering on <b>Pegasys.fi</b> (Uniswap v3 + Aave forks on Syscoin &amp; Rollux)</span></li>
              <li><span>Managed <b>Pali Wallet</b> — non-custodial browser extension + mobile wallet</span></li>
              <li><span>Embedded AI-assisted workflows (Claude Code MAX, Codex, Cursor) for spec drafting, code review and technical documentation</span></li>
            </ul>
            <div className="tl-tags"><span>zkSync</span><span>Validium</span><span>Rollux</span><span>Pegasys</span><span>Pali</span><span>UTXO + EVM</span></div>
          </TimelineItem>

          <TimelineItem
            yr="Jul 2025 — now"
            duration="10 months"
            company="Kmino"
            pill="Co-Founder"
            role="Co-founder · product studio · Web3 · Fintech · AI"
            current
          >
            <p>Co-founded Kmino to design, build and launch <b>our own products</b> across Web3, Fintech and AI. Lead engineering and technical direction, with AI-assisted engineering embedded across the entire workflow.</p>
            <ul>
              <li><span>Set technical direction, architecture standards and delivery model across all products</span></li>
              <li><span>Lead product scoping, engineering hiring and day-to-day team operations</span></li>
              <li><span>Own the AI-assisted engineering playbook — multi-agent orchestration with <b>Claude Code MAX</b> (context-mode), Codex and Cursor across design, implementation, review, testing and documentation</span></li>
              <li><span>Drive product roadmap and positioning alongside my co-founder</span></li>
            </ul>
            <div className="tl-tags">
              <span>Solidity</span><span>TypeScript</span><span>Node.js</span><span>React Native</span><span>LLM tooling</span>
            </div>
          </TimelineItem>

          <TimelineItem
            yr="Aug 2024 — Apr 2026"
            duration="1y 9m"
            company="Lunos DAO"
            pill="Blockchain Developer"
            role="Decentralized risk management for Web3"
          >
            <p>Redesigning the smart-contract architecture for scalability, security, interoperability and gas efficiency. Automated, trustless coverage that protects digital assets across chains — no intermediaries.</p>
            <ul>
              <li><span>Contributed to systems covering <b>$20M+ in underwriting capacity</b></span></li>
              <li><span>Led integration with <b>EigenLayer&apos;s AVS</b> (Actively Validated Services)</span></li>
              <li><span>Pitched Lunos to investors at Ethereum&apos;s biggest conference (<b>DevCon</b>)</span></li>
              <li><span>Used Claude Code, Codex and Cursor for contract analysis, test generation and gas optimization</span></li>
            </ul>
            <div className="tl-tags"><span>Solidity</span><span>Hardhat</span><span>Foundry</span><span>EigenLayer AVS</span><span>$20M+ covered</span></div>
          </TimelineItem>

          <TimelineItem
            yr="Aug 2022 — Mar 2023"
            duration="8 months"
            company="Clevertech"
            pill="Blockchain Developer"
            role="New York, US (remote)"
          >
            <p>Designed, implemented and deployed three production smart-contract systems for NFT-focused clients — end-to-end ownership from requirements to mainnet.</p>
            <ul>
              <li><span>Proof-of-attendance NFT drop — deployed to Polygon mainnet</span></li>
              <li><span>NFT collection with packs-and-cards mechanics — <span className="mono">1,400+</span> tokens minted on Ethereum mainnet</span></li>
              <li><span>Custodial wallet dedicated to the client&apos;s NFT drops (private deployment)</span></li>
            </ul>
            <div className="tl-tags"><span>Solidity</span><span>TypeScript</span><span>Hardhat</span><span>Ethereum · Polygon</span></div>
          </TimelineItem>

          <TimelineItem
            yr="Aug 2019 — Mar 2022"
            duration="2y 8m"
            company="Brick Abode"
            pill="Software Engineer · PM"
            role="Salem, Virginia (remote) · multi-disciplinary teams"
          >
            <p>Led multi-disciplinary teams across blockchain, fintech and platform engineering projects while contributing hands-on to the company&apos;s strategic growth.</p>
            <ul>
              <li><span>Managed the team upgrading <b>Epic Cash</b> blockchain (MimbleWimble, Rust-based Grin fork) from v2.17 to v3.0</span></li>
              <li><span>Added NFT support to <b>Royalty Exchange</b> — ERC-721 + ERC-2981 on-chain royalties, deployed to Ethereum mainnet</span></li>
              <li><span>Core contributor on a crypto prime-brokerage platform — streaming market data, order routing, asset transfers; API clients for Kraken, Gemini and others</span></li>
              <li><span>Led team maintaining and extending a C# social-media analytics platform (<span className="mono">fee.org</span> · Jellyfish-Insights)</span></li>
              <li><span>Internal startup incubation — business model, international sales, team of 6 across marketing, sales and development</span></li>
            </ul>
            <div className="tl-tags"><span>Solidity</span><span>Rust</span><span>C#</span><span>TypeScript</span><span>F#</span></div>
          </TimelineItem>

          <TimelineItem
            yr="Jun 2017 — Jul 2019"
            duration="2y 2m"
            company="Via Apia Informática"
            pill="Software Engineer"
            role="Brasília, Brazil"
          />
        </div>

        <div className="section-lbl">// certifications &amp; honors</div>

        <div className="awards" data-reveal>
          <article className="award big">
            <span className="year">2024 · On-site hackathon · solo</span>
            <h4>1st Place — &ldquo;Truth on Sui&rdquo;</h4>
            <p className="mid" style={{ fontSize: '14px', maxWidth: '48ch' }}>Solo project winning 1st place at the SuiHub on-site hackathon in Dubai.</p>
            <span className="issuer">SuiHub · Dubai, UAE</span>
          </article>
          <article className="award">
            <span className="year">Certification</span>
            <h4>Ethereum Blockchain Developer Bootcamp with Solidity</h4>
            <span className="issuer">Online</span>
          </article>
          <article className="award">
            <span className="year">Certification</span>
            <h4>Advanced Solidity — Understanding &amp; Optimizing Gas Costs</h4>
            <span className="issuer">Online</span>
          </article>
          <article className="award">
            <span className="year">Certification</span>
            <h4>Agile Software Development — Remote Teams</h4>
            <span className="issuer">Online</span>
          </article>
          <article className="award">
            <span className="year">Certification</span>
            <h4>Agile Software Development — Code Quality</h4>
            <span className="issuer">Online</span>
          </article>
          <article className="award">
            <span className="year">Certification</span>
            <h4>Planning &amp; Releasing Software with JIRA</h4>
            <span className="issuer">Online</span>
          </article>
        </div>

        <div className="section-lbl">// core stack &amp; tools</div>
        <div className="tl-tags" data-reveal style={{ gap: '10px' }}>
          <span>Solidity</span>
          <span>TypeScript</span>
          <span>Node.js</span>
          <span>Hardhat</span>
          <span>Foundry</span>
          <span>Ethers.js</span>
          <span>EVM</span>
          <span>UTXO</span>
          <span>zkSync</span>
          <span>Validium</span>
          <span>EigenLayer / AVS</span>
          <span>Ethereum · Solana · Syscoin</span>
        </div>

        <div className="section-lbl">// AI-assisted engineering</div>
        <div className="tl-tags" data-reveal style={{ gap: '10px' }}>
          <span>Claude Code</span>
          <span>context-mode</span>
          <span>Multi-agent orchestration</span>
          <span>Codex</span>
          <span>Cursor</span>
          <span>LLM-driven code review &amp; test generation</span>
        </div>
      </main>
      <Reveal />
    </div>
  );
}
