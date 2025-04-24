"use client";

import React, { useContext } from "react";
import { Inter } from "next/font/google";
import { ThemeContext } from "./contexts/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  // Theme classes
  const bgClass = darkMode ? "bg-gray-900" : "bg-white";
  const textClass = darkMode ? "text-white" : "text-gray-800";
  const navBgClass = darkMode ? "bg-gray-800" : "bg-white";
  const subtleBgClass = darkMode ? "bg-gray-800" : "bg-gray-50";
  const cardBgClass = darkMode ? "bg-gray-900" : "bg-white";
  const borderClass = darkMode ? "border-gray-700" : "border-gray-200";
  const subtleTextClass = darkMode ? "text-gray-400" : "text-gray-500";
  const bodyTextClass = darkMode ? "text-gray-300" : "text-gray-600";
  const accentTextClass = darkMode ? "text-blue-400" : "text-blue-600";
  const cardShadowClass = darkMode ? "shadow-md" : "shadow-lg";

  return (
    <div className={`min-h-screen ${bgClass} ${textClass}`}>
      {/* Navigation */}
      <nav className={`${navBgClass} p-4 sticky top-0 z-10 shadow-lg`}>
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">David Potolski Lafetá</h1>
          <div className="flex space-x-4 items-center">
            <a href="#about" className={`hover:${accentTextClass} transition-colors`}>About</a>
            <a href="#experience" className={`hover:${accentTextClass} transition-colors`}>Experience</a>
            <a href="#projects" className={`hover:${accentTextClass} transition-colors`}>Projects</a>
            <a href="#skills" className={`hover:${accentTextClass} transition-colors`}>Skills</a>
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-full hover:bg-gray-700 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark/light mode"
            >
              {darkMode ? (
                <i className="fas fa-sun text-yellow-300"></i>
              ) : (
                <i className="fas fa-moon text-blue-400"></i>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="about" className="container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center">
        <div className="mb-8 overflow-hidden rounded-full border-4 border-blue-500 shadow-lg">
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
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          David Potolski Lafetá
        </h1>
        <p className={`text-xl mb-8 ${darkMode ? "text-gray-300" : "text-gray-700"} max-w-3xl`}>
          Senior Smart Contract Engineer | DeFi Protocol Architect | Technical Team Lead
        </p>
        <div className={`text-lg mb-10 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
          Blockchain Development Expert specializing in Smart Contracts & DeFi Solutions
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a
            href="https://github.com/potolski"
            target="_blank"
            className={`flex items-center px-4 py-2 ${
              darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"
            } hover:bg-gray-700 hover:text-white rounded-lg transition-colors`}
          >
            <i className="fab fa-github mr-2"></i> GitHub
          </a>
          <a
            href="https://linkedin.com/in/davidpotolskilafeta/"
            target="_blank"
            className={`flex items-center px-4 py-2 ${
              darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"
            } hover:bg-gray-700 hover:text-white rounded-lg transition-colors`}
          >
            <i className="fab fa-linkedin mr-2"></i> LinkedIn
          </a>
          <a
            href="mailto:davidpotolskilafeta@gmail.com"
            className={`flex items-center px-4 py-2 ${
              darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"
            } hover:bg-gray-700 hover:text-white rounded-lg transition-colors`}
          >
            <i className="fas fa-envelope mr-2"></i> Email
          </a>
          <a
            href="https://medium.com/@davidpotolskilafeta"
            target="_blank"
            className={`flex items-center px-4 py-2 ${
              darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"
            } hover:bg-gray-700 hover:text-white rounded-lg transition-colors`}
          >
            <i className="fab fa-medium mr-2"></i> Blog
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
          <span className={darkMode ? "text-blue-400" : "text-blue-600"}>Solidity</span>
          <span>•</span>
          <span className={darkMode ? "text-blue-400" : "text-blue-600"}>Move</span>
          <span>•</span>
          <span className={darkMode ? "text-blue-400" : "text-blue-600"}>UTXO</span>
          <span>•</span>
          <span className={darkMode ? "text-blue-400" : "text-blue-600"}>EVM</span>
          <span>•</span>
          <span className={darkMode ? "text-blue-400" : "text-blue-600"}>ZK</span>
          <span>•</span>
          <span className={darkMode ? "text-blue-400" : "text-blue-600"}>DeFi</span>
        </div>
      </header>

      {/* Summary */}
      <section className={`${subtleBgClass} py-16`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-700"} max-w-4xl mx-auto`}>
            I am a Senior Smart Contract Engineer and DeFi Protocol Architect with extensive experience leading technical teams across blockchain ecosystems. 
            I combine deep technical expertise with strong project management skills to deliver successful blockchain solutions. 
            My expertise spans across Smart Contracts (Solidity, Move), UTXO, EVM, and ZK implementations, with a focus on DeFi protocol architecture, 
            DEXs, DAOs, and on-chain KYC solutions.
          </p>
        </div>
      </section>

      {/* Work Experience */}
      <section id="experience" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>

        {/* Lunos DAO */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-2xl font-bold text-blue-400">Lunos DAO</h3>
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
            <h3 className="text-2xl font-bold text-blue-400">Syscoin</h3>
            <div className="text-gray-400">May 2023 - Present</div>
          </div>
          <div className="text-xl mb-4">Ecosystem Manager - Dubai, UAE</div>
          <ul className={`list-disc pl-5 space-y-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
            <li>Oversaw internal team coordination, resource allocation, and strategic tracking across development initiatives</li>
            <li>Aligned technical workstreams, optimized resource distribution, and maintained visibility on high-priority projects</li>
            <li>Led the development of zkSYS, Syscoin's first Edgechain built with zkRollup technology</li>
          </ul>
        </div>
        
        {/* Pollum */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-2xl font-bold text-blue-400">Pollum</h3>
            <div className="text-gray-400">May 2023 - Present</div>
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
            <h3 className="text-2xl font-bold text-blue-400">Clevertech</h3>
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
            <h3 className="text-2xl font-bold text-blue-400">Brick Abode</h3>
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
          <a href="#" className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-white">
            View Full Work History
          </a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className={`${subtleBgClass} py-16`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pali Wallet */}
            <div className={`${cardBgClass} rounded-xl overflow-hidden ${cardShadowClass} border ${borderClass}`}>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Pali Wallet</h3>
                <p className={`${darkMode ? "text-gray-400" : "text-gray-500"} mb-4`}>
                  A Web3 multichain wallet supporting multiple blockchains
                </p>
                <div className="flex flex-wrap gap-2 mb-4 text-xs">
                  <span className={darkMode ? "text-blue-400" : "text-blue-600"}>React</span>
                  <span>•</span>
                  <span className={darkMode ? "text-blue-400" : "text-blue-600"}>Web3.js</span>
                  <span>•</span>
                  <span className={darkMode ? "text-blue-400" : "text-blue-600"}>Blockchain</span>
                </div>
                <div className="flex space-x-3">
                  <a href="https://github.com/syscoin/pali-wallet" target="_blank" className="text-blue-400 hover:underline inline-flex items-center">
                    <i className="fab fa-github mr-1"></i> GitHub
                  </a>
                  <a href="https://paliwallet.com/" target="_blank" className="text-blue-400 hover:underline inline-flex items-center">
                    <i className="fas fa-external-link-alt mr-1"></i> Website
                  </a>
                </div>
              </div>
            </div>

            {/* Lunos */}
            <div className={`${cardBgClass} rounded-xl overflow-hidden ${cardShadowClass} border ${borderClass}`}>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Lunos Protocol</h3>
                <p className={`${darkMode ? "text-gray-400" : "text-gray-500"} mb-4`}>
                  Automated, trustless coverage solutions for digital assets
                </p>
                <div className="flex flex-wrap gap-2 mb-4 text-xs">
                  <span className={darkMode ? "text-blue-400" : "text-blue-600"}>Solidity</span>
                  <span>•</span>
                  <span className={darkMode ? "text-blue-400" : "text-blue-600"}>DeFi</span>
                  <span>•</span>
                  <span className={darkMode ? "text-blue-400" : "text-blue-600"}>Insurance</span>
                </div>
                <div className="flex space-x-3">
                  <a href="https://github.com/Uno-Re" target="_blank" className="text-blue-400 hover:underline inline-flex items-center">
                    <i className="fab fa-github mr-1"></i> GitHub
                  </a>
                  <a href="https://lunos.xyz" target="_blank" className="text-blue-400 hover:underline inline-flex items-center">
                    <i className="fas fa-external-link-alt mr-1"></i> Website
                  </a>
                </div>
              </div>
            </div>

            {/* Pegasys.fi */}
            <div className={`${cardBgClass} rounded-xl overflow-hidden ${cardShadowClass} border ${borderClass}`}>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Pegasys.fi</h3>
                <p className={`${darkMode ? "text-gray-400" : "text-gray-500"} mb-4`}>
                  DeFi Protocol forked from Uniswap v3, running on Syscoin and Rollux
                </p>
                <div className="flex flex-wrap gap-2 mb-4 text-xs">
                  <span className={darkMode ? "text-blue-400" : "text-blue-600"}>Solidity</span>
                  <span>•</span>
                  <span className={darkMode ? "text-blue-400" : "text-blue-600"}>DeFi</span>
                  <span>•</span>
                  <span className={darkMode ? "text-blue-400" : "text-blue-600"}>AMM</span>
                </div>
                <div className="flex space-x-3">
                  <a href="https://github.com/pegasys-fi" target="_blank" className="text-blue-400 hover:underline inline-flex items-center">
                    <i className="fab fa-github mr-1"></i> GitHub
                  </a>
                  <a href="https://app.pegasys.fi" target="_blank" className="text-blue-400 hover:underline inline-flex items-center">
                    <i className="fas fa-external-link-alt mr-1"></i> Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Blockchain Skills */}
          <div className={`${darkMode ? "bg-gray-800" : "bg-white"} p-6 rounded-xl shadow border ${borderClass}`}>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Blockchain Development</h3>
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
          <div className={`${darkMode ? "bg-gray-800" : "bg-white"} p-6 rounded-xl shadow border ${borderClass}`}>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Development Tools</h3>
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