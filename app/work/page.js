import Navbar from '../components/Navbar';
import Reveal from '../components/Reveal';

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
          <div className="tl-item current">
            <div className="tl-time"><span className="yr">Apr 2023 — now</span>3y 1m</div>
            <div className="tl-body">
              <div className="tl-company"><h3>Syscoin</h3><span className="pill">Core Technical Lead</span></div>
              <div className="tl-role">Core Technical Lead (Dec 2023–now) · Senior Blockchain Developer (Apr–Dec 2023)</div>
              <p>Led technical direction across Syscoin&apos;s multi-layer ecosystem — from application-layer DeFi and wallet products (Pegasys, Pali Wallet) to core infrastructure and zk scaling (zkSYS, Rollux, core UTXO).</p>
              <ul>
                <li><span>Coordinated the launch of the <b>zkSYS testnet</b></span></li>
                <li><span>Led cross-functional alignment for a multi-chain architecture (UTXO + EVM + zk) — Bitcoin security, EVM compatibility, zk scalability</span></li>
                <li><span>Directed DeFi protocol engineering on <b>Pegasys.fi</b> (Uniswap v3 + Aave forks on Syscoin &amp; Rollux)</span></li>
                <li><span>Managed <b>Pali Wallet</b> — non-custodial browser extension + mobile wallet</span></li>
                <li><span>Embedded AI-assisted workflows (Claude Code MAX, Codex, Cursor) for spec drafting, code review and technical documentation</span></li>
              </ul>
              <div className="tl-tags"><span>zkSync</span><span>Validium</span><span>Rollux</span><span>Pegasys</span><span>Pali</span><span>UTXO + EVM</span></div>
            </div>
          </div>

          <div className="tl-item current">
            <div className="tl-time"><span className="yr">Jul 2025 — now</span>10 months</div>
            <div className="tl-body">
              <div className="tl-company"><h3>Kmino</h3><span className="pill">Co-Founder</span></div>
              <div className="tl-role">Co-founder · product studio · Web3 · Fintech · AI</div>
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
            </div>
          </div>

          <div className="tl-item">
            <div className="tl-time"><span className="yr">Aug 2024 — Apr 2026</span>1y 9m</div>
            <div className="tl-body">
              <div className="tl-company"><h3>Lunos DAO</h3><span className="pill">Blockchain Developer</span></div>
              <div className="tl-role">Decentralized risk management for Web3</div>
              <p>Redesigning the smart-contract architecture for scalability, security, interoperability and gas efficiency. Automated, trustless coverage that protects digital assets across chains — no intermediaries.</p>
              <ul>
                <li><span>Contributed to systems covering <b>$20M+ in underwriting capacity</b></span></li>
                <li><span>Led integration with <b>EigenLayer&apos;s AVS</b> (Actively Validated Services)</span></li>
                <li><span>Pitched Lunos to investors at Ethereum&apos;s biggest conference (<b>DevCon</b>)</span></li>
                <li><span>Used Claude Code, Codex and Cursor for contract analysis, test generation and gas optimization</span></li>
              </ul>
              <div className="tl-tags"><span>Solidity</span><span>Hardhat</span><span>Foundry</span><span>EigenLayer AVS</span><span>$20M+ covered</span></div>
            </div>
          </div>

          <div className="tl-item">
            <div className="tl-time"><span className="yr">Aug 2022 — Mar 2023</span>8 months</div>
            <div className="tl-body">
              <div className="tl-company"><h3>Clevertech</h3><span className="pill">Blockchain Developer</span></div>
              <div className="tl-role">New York, US (remote)</div>
              <p>Designed, implemented and deployed three production smart-contract systems for NFT-focused clients — end-to-end ownership from requirements to mainnet.</p>
              <ul>
                <li><span>Proof-of-attendance NFT drop — deployed to Polygon mainnet</span></li>
                <li><span>NFT collection with packs-and-cards mechanics — <span className="mono">1,400+</span> tokens minted on Ethereum mainnet</span></li>
                <li><span>Custodial wallet dedicated to the client&apos;s NFT drops (private deployment)</span></li>
              </ul>
              <div className="tl-tags"><span>Solidity</span><span>TypeScript</span><span>Hardhat</span><span>Ethereum · Polygon</span></div>
            </div>
          </div>

          <div className="tl-item">
            <div className="tl-time"><span className="yr">Aug 2019 — Mar 2022</span>2y 8m</div>
            <div className="tl-body">
              <div className="tl-company"><h3>Brick Abode</h3><span className="pill">Software Engineer · PM</span></div>
              <div className="tl-role">Salem, Virginia (remote) · multi-disciplinary teams</div>
              <p>Led multi-disciplinary teams across blockchain, fintech and platform engineering projects while contributing hands-on to the company&apos;s strategic growth.</p>
              <ul>
                <li><span>Managed the team upgrading <b>Epic Cash</b> blockchain (MimbleWimble, Rust-based Grin fork) from v2.17 to v3.0</span></li>
                <li><span>Added NFT support to <b>Royalty Exchange</b> — ERC-721 + ERC-2981 on-chain royalties, deployed to Ethereum mainnet</span></li>
                <li><span>Core contributor on a crypto prime-brokerage platform — streaming market data, order routing, asset transfers; API clients for Kraken, Gemini and others</span></li>
                <li><span>Led team maintaining and extending a C# social-media analytics platform (<span className="mono">fee.org</span> · Jellyfish-Insights)</span></li>
                <li><span>Internal startup incubation — business model, international sales, team of 6 across marketing, sales and development</span></li>
              </ul>
              <div className="tl-tags"><span>Solidity</span><span>Rust</span><span>C#</span><span>TypeScript</span><span>F#</span></div>
            </div>
          </div>

          <div className="tl-item">
            <div className="tl-time"><span className="yr">Jun 2017 — Jul 2019</span>2y 2m</div>
            <div className="tl-body">
              <div className="tl-company"><h3>Via Apia Informática</h3><span className="pill">Software Engineer</span></div>
              <div className="tl-role">Brasília, Brazil</div>
            </div>
          </div>
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
          <span>Ethereum · Solana · Syscoin · Rollux</span>
        </div>

        <div className="section-lbl">// AI-assisted engineering</div>
        <div className="tl-tags" data-reveal style={{ gap: '10px' }}>
          <span>Claude Code MAX</span>
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
