"use client";

import React, { useContext, useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { ThemeContext } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { darkMode } = useContext(ThemeContext);

  // Theme classes
  const bgClass = darkMode ? "bg-gray-900" : "bg-white";
  const textClass = darkMode ? "text-white" : "text-gray-800";
  const subtleBgClass = darkMode ? "bg-gray-700" : "bg-gray-50";
  const borderClass = darkMode ? "border-gray-700" : "border-gray-200";
  const contentWidthClass = "max-w-4xl";
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const ids = ["about", "experience", "skills"];
    let ticking = false;

    const updateActiveByPosition = () => {
      const targetY = window.innerHeight * 0.33; // roughly 1/3 from top
      let bestId = ids[0];
      let bestDist = Number.POSITIVE_INFINITY;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const dist = Math.abs(rect.top - targetY);
        if (dist < bestDist) {
          bestDist = dist;
          bestId = id;
        }
      }
      setActiveSection(bestId);
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveByPosition();
          ticking = false;
        });
        ticking = true;
      }
    };

    updateActiveByPosition();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);


  return (
    <div className={`min-h-screen ${bgClass} ${textClass} pt-14`} style={darkMode ? { backgroundColor: "#171717", color: "#e5e7eb" } : undefined}>
      <Navbar />

      {/* Hero Section */}
      <header
        id="about"
        className={`container mx-auto px-4 py-16 flex flex-col items-center justify-center text-center ${contentWidthClass}`}
      >
        <div className={`mb-8 overflow-hidden rounded-full border ${darkMode ? "border-gray-600" : "border-gray-300"} shadow-sm`}>
          <img
            src="/profile-photo.jpeg"
            alt="David Potolski Lafetá"
            className="w-40 h-40 object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/160?text=CV";
            }}
          />
        </div>
        <h1 className="text-4xl font-serif font-bold mb-3 tracking-tight">
          David Potolski Lafetá
        </h1>
        <p className={`text-base mb-4 ${darkMode ? "text-gray-300" : "text-gray-700"} max-w-3xl`}>
          Founder @ <a href="https://www.kmino.io/" target="_blank" rel="noopener noreferrer" className="underline text-orange-600 dark:text-orange-400">Kmino</a> • Core Manager @ <a href="https://syscoin.org/" target="_blank" rel="noopener noreferrer" className="underline text-orange-600 dark:text-orange-400">Syscoin</a>
        </p>
        <div className={`text-sm mb-8 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
          Blockchain engineer working across EVM and UTXO chains, DeFi, ZK, and smart contracts — open to new opportunities
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <a
            href="https://github.com/potolski"
            target="_blank"
            className={`flex items-center px-3 py-1.5 border rounded ${
              darkMode ? "border-gray-600 text-gray-200 hover:bg-gray-800" : "border-gray-300 text-gray-800 hover:bg-gray-50"
            } transition-colors`}
          >
            <i className="fab fa-github mr-2"></i> GitHub
          </a>
          <a
            href="https://linkedin.com/in/davidpotolskilafeta/"
            target="_blank"
            className={`flex items-center px-3 py-1.5 border rounded ${
              darkMode ? "border-gray-600 text-gray-200 hover:bg-gray-800" : "border-gray-300 text-gray-800 hover:bg-gray-50"
            } transition-colors`}
          >
            <i className="fab fa-linkedin mr-2"></i> LinkedIn
          </a>
          <a
            href="mailto:davidpotolskilafeta@gmail.com"
            className={`flex items-center px-3 py-1.5 border rounded ${
              darkMode ? "border-gray-600 text-gray-200 hover:bg-gray-800" : "border-gray-300 text-gray-800 hover:bg-gray-50"
            } transition-colors`}
          >
            <i className="fas fa-envelope mr-2"></i> Email
          </a>
          <a
            href="https://medium.com/@davidpotolskilafeta"
            target="_blank"
            className={`flex items-center px-3 py-1.5 border rounded ${
              darkMode ? "border-gray-600 text-gray-200 hover:bg-gray-800" : "border-gray-300 text-gray-800 hover:bg-gray-50"
            } transition-colors`}
          >
            <i className="fab fa-medium mr-2"></i> Blog
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
          <span className={darkMode ? "text-orange-400" : "text-orange-600"}>Solidity</span>
          <span>•</span>
          <span className={darkMode ? "text-orange-400" : "text-orange-600"}>Move</span>
          <span>•</span>
          <span className={darkMode ? "text-orange-400" : "text-orange-600"}>UTXO</span>
          <span>•</span>
          <span className={darkMode ? "text-orange-400" : "text-orange-600"}>EVM</span>
          <span>•</span>
          <span className={darkMode ? "text-orange-400" : "text-orange-600"}>ZK</span>
          <span>•</span>
          <span className={darkMode ? "text-orange-400" : "text-orange-600"}>DeFi</span>
        </div>
      </header>

      {/* Summary */}
      <section className={`${subtleBgClass} py-12`} style={darkMode ? { backgroundColor: "#2b2b2c" } : undefined}>
        <div className={`container mx-auto px-4 ${contentWidthClass}`}>
          <h2 className="text-2xl font-serif font-semibold mb-2 text-center">About Me</h2>
          <div className="mx-auto mb-6 h-0.5 w-16 rounded" style={{ backgroundColor: "#f97316" }}></div>
          <p className={`text-base leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"} max-w-3xl mx-auto`}>
            I’m a blockchain engineer, currently Core Manager at Syscoin and running Kmino — a small engineering studio — on the side.
            Over the past several years I’ve worked across UTXO and EVM chains, L2s, and ZK systems, contributing to protocols, DeFi markets, wallets, and on-chain identity. Most of my day-to-day is Solidity and Move, along with the tooling around rollups and smart contract infrastructure.
          </p>
        </div>
      </section>

      {/* Work Experience */}
      <section id="experience" className={`container mx-auto px-4 py-14 ${contentWidthClass}`}>
        <h2 className="text-2xl font-serif font-semibold mb-2 text-center">Work Experience</h2>
        <div className="mx-auto mb-8 h-0.5 w-16 rounded" style={{ backgroundColor: "#f97316" }}></div>

        {/* Kmino */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-2xl font-bold text-orange-500">
              <a href="https://www.kmino.io/" target="_blank" rel="noopener noreferrer" className="hover:underline text-inherit">Kmino</a>
            </h3>
            <div className="text-gray-400">2025 - Present</div>
          </div>
          <div className="text-xl mb-4">Founder - Remote</div>
          <ul className={`list-disc pl-5 space-y-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
            <li>Run a small engineering studio alongside a few other engineers, taking on Web3, smart contract, and fullstack work</li>
            <li>Engagements have ranged from product builds to senior engineering support and short advisory sprints</li>
          </ul>
        </div>

        {/* Lunos DAO */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-2xl font-bold text-orange-500">Lunos DAO</h3>
            <div className="text-gray-400">August 2024 - Present</div>
          </div>
          <div className="text-xl mb-4">Tech Lead - Dubai, UAE</div>
          <ul className={`list-disc pl-5 space-y-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
            <li>Led the redesigning of the core smart contract architecture</li>
            <li>Enhanced scalability, security, and interoperability while optimizing gas efficiency</li>
            <li>Built automated, trustless coverage solutions that protect digital assets across the blockchain ecosystem</li>
          </ul>
        </div>

        {/* Syscoin */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-2xl font-bold text-orange-500">
              <a href="https://syscoin.org/" target="_blank" rel="noopener noreferrer" className="hover:underline text-inherit">Syscoin</a>
            </h3>
            <div className="text-gray-400">May 2023 - Present</div>
          </div>
          <div className="text-xl mb-4">Core Manager - Dubai, UAE</div>
          <ul className={`list-disc pl-5 space-y-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
            <li>Oversaw internal team coordination, resource allocation, and strategic tracking across development initiatives</li>
            <li>Aligned technical workstreams, optimized resource distribution, and maintained visibility on high-priority projects</li>
            <li>Led the development of zkSYS, Syscoin's first Edgechain built with zkRollup technology</li>
          </ul>
        </div>
        
        {/* Pollum */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-2xl font-bold text-orange-500">Pollum</h3>
            <div className="text-gray-400">May 2023 - May 2025</div>
          </div>
          <div className="text-xl mb-4">Tech Lead | Project Manager - British Virgin Islands</div>
          <ul className={`list-disc pl-5 space-y-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
            <li>Developed KYC solutions and built DID implementations for on-chain primary and secondary sales</li>
            <li>Led smart contract development for UnoRe and managed Pegasys.fi DeFi protocol (Uniswap v3 fork)</li>
            <li>Managed development of Pali wallet, a successful crypto wallet extension</li>
          </ul>
        </div>

        {/* Clevertech */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-2xl font-bold text-orange-500">Clevertech</h3>
            <div className="text-gray-400">August 2022 - March 2023</div>
          </div>
          <div className="text-xl mb-4">Software Engineer - New York, United States</div>
          <ul className={`list-disc pl-5 space-y-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
            <li>Designed and implemented three major smart contract projects deployed to mainnet</li>
            <li>Developed a proof of attendance NFT system on Polygon for tracking event participation</li>
            <li>Created an NFT collection with packs and cards system, achieving over 1,400 token mints</li>
            <li>Built a custodial wallet exclusively for client NFTs using Solidity and Hardhat</li>
          </ul>
        </div>

        {/* Brick Abode */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-2xl font-bold text-orange-500">Brick Abode</h3>
            <div className="text-gray-400">August 2019 - March 2022</div>
          </div>
          <div className="text-xl mb-4">Software Engineer | Project Manager - Salem, Virginia</div>
          <ul className={`list-disc pl-5 space-y-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
            <li>Led the Epic Cash blockchain upgrade (MimbleWimble implementation in Rust) from v2.17 to v3.0</li>
            <li>Implemented NFT support and royalty marketplace features using Solidity (ERC-721 and ERC-2981)</li>
            <li>Developed core APIs for cryptocurrency asset management, including market data streaming and order management</li>
            <li>Managed a social media analytics platform maintenance team and led startup planning initiatives</li>
          </ul>
        </div>

        <div className="text-center mt-10">
          <a
            href="https://linkedin.com/in/davidpotolskilafeta/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-lg transition-colors text-white hover:opacity-90"
            style={{ backgroundColor: "#f97316" }}
          >
            View Full Work History
          </a>
        </div>
      </section>

      {/* Projects removed from home, now at /projects */}
      {/* Events moved to /events */}

      {/* Skills */}
      <section id="skills" className={`container mx-auto px-4 py-14 ${contentWidthClass}`}>
        <h2 className="text-2xl font-serif font-semibold mb-2 text-center">Skills & Expertise</h2>
        <div className="mx-auto mb-8 h-0.5 w-16 rounded" style={{ backgroundColor: "#f97316" }}></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Blockchain Skills */}
          <div className={`${darkMode ? "bg-gray-900" : "bg-white"} p-6 rounded-lg border ${borderClass}`} style={darkMode ? { backgroundColor: "#161617" } : undefined}>
            <h3 className="text-xl font-bold mb-4 text-orange-500">Blockchain Development</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                <span className={darkMode ? "" : "text-gray-700"}>Smart Contracts (Solidity, Move)</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                <span className={darkMode ? "" : "text-gray-700"}>UTXO & EVM Systems</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                <span className={darkMode ? "" : "text-gray-700"}>DeFi Protocol Architecture</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                <span className={darkMode ? "" : "text-gray-700"}>ZK Implementations</span>
              </li>
            </ul>
          </div>

          {/* Development Tools */}
          <div className={`${darkMode ? "bg-gray-900" : "bg-white"} p-6 rounded-lg border ${borderClass}`} style={darkMode ? { backgroundColor: "#161617" } : undefined}>
            <h3 className="text-xl font-bold mb-4 text-orange-500">Development Tools</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                <span className={darkMode ? "" : "text-gray-700"}>Hardhat</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                <span className={darkMode ? "" : "text-gray-700"}>Truffle</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                <span className={darkMode ? "" : "text-gray-700"}>OpenZeppelin</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                <span className={darkMode ? "" : "text-gray-700"}>Ethers.js</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}