"use client";

import React, { useState, useEffect, useContext } from "react";
import { Inter } from "next/font/google";
import { ThemeContext } from "./contexts/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Loading animation - hide after 1.5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

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

  if (loading) {
    return (
      <div
        className={`min-h-screen ${bgClass} ${textClass} flex items-center justify-center`}
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mb-4"></div>
          <h2 className="text-2xl font-semibold">Loading...</h2>
        </div>
      </div>
    );
  }
  return (
    <div className={`min-h-screen ${bgClass} ${textClass}`}>
      {/* Navigation */}
      <nav className={`${navBgClass} p-4 sticky top-0 z-10 shadow-lg`}>
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">David Potolski Lafeta</h1>
          <div className="flex space-x-4 items-center">
            <a
              href="#about"
              className={`hover:${accentTextClass} transition-colors`}
            >
              About
            </a>
            <a
              href="#experience"
              className={`hover:${accentTextClass} transition-colors`}
            >
              Experience
            </a>
            <a
              href="#projects"
              className={`hover:${accentTextClass} transition-colors`}
            >
              Projects
            </a>
            <a
              href="#skills"
              className={`hover:${accentTextClass} transition-colors`}
            >
              Skills
            </a>
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
      <header
        id="about"
        className="container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center"
      >
        <div className="mb-8 overflow-hidden rounded-full border-4 border-blue-500 shadow-lg">
          {/* Replace this with your actual photo */}
          <img
            src="/profile-photo.jpeg"
            alt="David Potolski Lafeta"
            className="w-40 h-40 object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/160?text=CV";
            }}
          />
        </div>
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          David Potolski Lafeta
        </h1>
        <p
          className={`text-xl mb-8 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          } max-w-3xl`}
        >
          "This is totally my website and I didn't just copied Claudio's and put my face on it..."
          <span
            className={`block mt-2 text-sm ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            — me
          </span>
        </p>
        <div
          className={`text-lg mb-10 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Senior Software Engineer specializing in Blockchain & Emerging
          Technologies
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
            href="/david-potolski-resume.pdf"
            target="_blank"
            className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-white"
          >
            <i className="fas fa-file-pdf mr-2"></i> Resume
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
          <span className={darkMode ? "text-blue-400" : "text-blue-600"}>
            Blockchain
          </span>
          <span>•</span>
          <span className={darkMode ? "text-blue-400" : "text-blue-600"}>
            Smart Contracts
          </span>
          <span>•</span>
          <span className={darkMode ? "text-blue-400" : "text-blue-600"}>
            Distributed Systems
          </span>
          <span>•</span>
          <span className={darkMode ? "text-blue-400" : "text-blue-600"}>
            Rust
          </span>
          <span>•</span>
          <span className={darkMode ? "text-blue-400" : "text-blue-600"}>
            Solidity
          </span>
          <span>•</span>
          <span className={darkMode ? "text-blue-400" : "text-blue-600"}>
            NodeJS
          </span>
          <span>•</span>
          <span className={darkMode ? "text-blue-400" : "text-blue-600"}>
            AI
          </span>
        </div>
      </header>

      {/* Summary */}
      <section className={`${subtleBgClass} py-16`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <p
            className={`text-lg ${
              darkMode ? "text-gray-300" : "text-gray-700"
            } max-w-4xl mx-auto`}
          >
            Innovative software engineer and technical leader with over six
            years of experience in blockchain, fintech, and distributed systems.
            Passionate about transforming complex challenges into simple,
            scalable solutions, I excel in driving technological innovation
            across startups and established enterprises. Dual Brazilian-Italian
            citizen with experience working globally.
          </p>
        </div>
      </section>

      {/* Work Experience */}
      <section id="experience" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Work Experience
        </h2>

        {/* Uno Re */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-2xl font-bold text-blue-400">Uno Re</h3>
            <div className="text-gray-400">
              {darkMode ? "Jan 2024 - Present" : "Jan 2024 - Present"}
            </div>
          </div>
          <div className="text-xl mb-4">Lead Engineer - Dubai, UAE</div>
          <ul
            className={`list-disc pl-5 space-y-2 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <li>
              Appointed as Lead Engineer following Syslabs' acquisition of a
              majority stake in Uno Re, overseeing the restructuring of Uno Re
              backend (Node.js) during the transition to Lunos
            </li>
            <li>
              Directing the redeployment of Uno Re V3, smart contracts
              optimizing the protocol in many different segments
            </li>
            <li>
              Pioneered an AVS automated claims system implementing AI
              agent-based workflows and tested inference for claims, leveraging
              a P2P network architecture optimized for distributed, real-time
              applications
            </li>
          </ul>
        </div>

        {/* Pollum */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-2xl font-bold text-blue-400">Pollum</h3>
            <div className="text-gray-400">Jan 2021 - 2024</div>
          </div>
          <div className="text-xl mb-4">
            Co-Founder & CTO - Florianopolis, Brazil
          </div>
          <ul
            className={`list-disc pl-5 space-y-2 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <li>
              Orchestrated development of Pali Wallet, scaling to 20,000+
              downloads, with an open-source codebase
            </li>
            <li>
              Designed and optimized blockchain infrastructure, focusing on
              smart contracts, RPC nodes orchestration, systems design and
              architecture
            </li>
            <li>
              Led 40+ engineers across multiple blockchain projects for Syscoin,
              Solana, Near and other startups with high-quality execution
            </li>
            <li>
              Impact: Strengthened Pollum's reputation as a leading blockchain
              solutions provider before transitioning into an advisory role
            </li>
          </ul>
        </div>

        {/* Luxy */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-2xl font-bold text-blue-400">Luxy</h3>
            <div className="text-gray-400">Sep 2021 - Mar 2023</div>
          </div>
          <div className="text-xl mb-4">
            Blockchain Engineer (Acquired by Syslabs) - Dubai, UAE
          </div>
          <ul
            className={`list-disc pl-5 space-y-2 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <li>
              Engineered audited smart contracts for an NFT marketplace deployed
              in production on 4 EVM chains (Syscoin, Polygon, others)
            </li>
            <li>
              Built a backend using Node.js, MongoDB, and RabbitMQ across two
              microservices, indexing millions of ERC721 and ERC1155 NFTs from
              Ethereum
            </li>
            <li>
              Impact: Facilitated Luxy's acquisition by Syslabs, securing its
              integration into a broader blockchain ecosystem
            </li>
          </ul>
        </div>

        {/* BTG Pactual */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-2xl font-bold text-blue-400">BTG Pactual</h3>
            <div className="text-gray-400">Jul 2020 - Jan 2021</div>
          </div>
          <div className="text-xl mb-4">
            Software Engineer - Sao Paulo, Brazil
          </div>
          <ul
            className={`list-disc pl-5 space-y-2 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <li>
              Optimized High-Frequency Trading: Enhanced Dolarbot, an automated
              USD/BRL futures trading bot, significantly improving execution
              speed and strategy efficiency
            </li>
            <li>
              Built a Private Liquidity Market: Developed BLOX, a
              privacy-focused large-order execution system for institutional
              investors
            </li>
            <li>
              Impact: Improved BTG's institutional trading efficiency, securing
              high-value market opportunities and enhancing liquidity execution
            </li>
          </ul>
        </div>

        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-white"
          >
            View Full Work History
          </a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className={`${subtleBgClass} py-16`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pali Wallet */}
            <div
              className={`${cardBgClass} rounded-xl overflow-hidden ${cardShadowClass} border ${borderClass}`}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Pali Wallet</h3>
                <p
                  className={`${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  } mb-4`}
                >
                  A Web3 multichain wallet with 20,000+ downloads, supporting
                  multiple blockchains.
                </p>
                <div className="flex flex-wrap gap-2 mb-4 text-xs">
                  <span
                    className={darkMode ? "text-blue-400" : "text-blue-600"}
                  >
                    React
                  </span>
                  <span>•</span>
                  <span
                    className={darkMode ? "text-blue-400" : "text-blue-600"}
                  >
                    Web3.js
                  </span>
                  <span>•</span>
                  <span
                    className={darkMode ? "text-blue-400" : "text-blue-600"}
                  >
                    Blockchain
                  </span>
                </div>
                <div className="flex space-x-3">
                  <a
                    href="https://github.com/syscoin/pali-wallet"
                    target="_blank"
                    className="text-blue-400 hover:underline inline-flex items-center"
                  >
                    <i className="fab fa-github mr-1"></i> GitHub
                  </a>
                  <a
                    href="https://paliwallet.com/"
                    target="_blank"
                    className="text-blue-400 hover:underline inline-flex items-center"
                  >
                    <i className="fas fa-external-link-alt mr-1"></i> Official
                    Website
                  </a>
                </div>
              </div>
            </div>

            {/* Luxy NFT Marketplace */}
            <div
              className={`${cardBgClass} rounded-xl overflow-hidden ${cardShadowClass} border ${borderClass}`}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Luxy Contracts</h3>
                <p
                  className={`${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  } mb-4`}
                >
                  Smart contracts for an NFT marketplace deployed on multiple
                  EVM chains.
                </p>
                <div className="flex flex-wrap gap-2 mb-4 text-xs">
                  <span
                    className={darkMode ? "text-blue-400" : "text-blue-600"}
                  >
                    Solidity
                  </span>
                  <span>•</span>
                  <span
                    className={darkMode ? "text-blue-400" : "text-blue-600"}
                  >
                    ERC721
                  </span>
                  <span>•</span>
                  <span
                    className={darkMode ? "text-blue-400" : "text-blue-600"}
                  >
                    ERC1155
                  </span>
                </div>
                <div className="flex space-x-3">
                  <a
                    href="https://github.com/Luxy-io/luxy-contracts"
                    target="_blank"
                    className="text-blue-400 hover:underline inline-flex items-center"
                  >
                    <i className="fab fa-github mr-1"></i> GitHub
                  </a>
                  <a
                    href="https://luxy.io/"
                    target="_blank"
                    className="text-blue-400 hover:underline inline-flex items-center"
                  >
                    <i className="fas fa-external-link-alt mr-1"></i> Official
                    Website
                  </a>
                </div>
              </div>
            </div>

            {/* Pryno */}
            <div
              className={`${cardBgClass} rounded-xl overflow-hidden ${cardShadowClass} border ${borderClass}`}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Pryno</h3>
                <p
                  className={`${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  } mb-4`}
                >
                  Open-source trading bot for Bitmex with comprehensive
                  back-testing capabilities.
                </p>
                <div className="flex flex-wrap gap-2 mb-4 text-xs">
                  <span
                    className={darkMode ? "text-blue-400" : "text-blue-600"}
                  >
                    Node.js
                  </span>
                  <span>•</span>
                  <span
                    className={darkMode ? "text-blue-400" : "text-blue-600"}
                  >
                    WebSocket
                  </span>
                  <span>•</span>
                  <span
                    className={darkMode ? "text-blue-400" : "text-blue-600"}
                  >
                    AWS
                  </span>
                </div>
                <div className="flex space-x-3">
                  <a
                    href="https://github.com/quan-digital/Pryno"
                    target="_blank"
                    className="text-blue-400 hover:underline inline-flex items-center"
                  >
                    <i className="fab fa-github mr-1"></i> GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Tech Skills */}
          <div
            className={`${
              darkMode ? "bg-gray-800" : "bg-white"
            } p-6 rounded-xl shadow border ${borderClass}`}
          >
            <h3 className="text-xl font-bold mb-4 text-blue-400">
              Technical Skills
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                <span className={darkMode ? "" : "text-gray-700"}>
                  Smart Contracts & Blockchain
                </span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                <span className={darkMode ? "" : "text-gray-700"}>
                  Distributed Systems
                </span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                <span className={darkMode ? "" : "text-gray-700"}>
                  Cryptography
                </span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                <span className={darkMode ? "" : "text-gray-700"}>
                  Systems Architecture
                </span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                <span className={darkMode ? "" : "text-gray-700"}>
                  Machine Learning & AI
                </span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                <span className={darkMode ? "" : "text-gray-700"}>
                  MicroServices
                </span>
              </li>
            </ul>
          </div>

          {/* Programming */}
          <div
            className={`${
              darkMode ? "bg-gray-800" : "bg-white"
            } p-6 rounded-xl shadow border ${borderClass}`}
          >
            <h3 className="text-xl font-bold mb-4 text-blue-400">
              Programming
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                <span className={darkMode ? "" : "text-gray-700"}>
                  Go, Solidity, Rust
                </span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                <span className={darkMode ? "" : "text-gray-700"}>
                  Python, JavaScript, TypeScript
                </span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                <span className={darkMode ? "" : "text-gray-700"}>
                  C++, C, C#
                </span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                <span className={darkMode ? "" : "text-gray-700"}>
                  Node.js, Express, NestJS
                </span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                <span className={darkMode ? "" : "text-gray-700"}>
                  React, React Native, Next.js
                </span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                <span className={darkMode ? "" : "text-gray-700"}>
                  Hardhat, Foundry
                </span>
              </li>
            </ul>
          </div>

          {/* DevOps & Tools */}
          <div
            className={`${
              darkMode ? "bg-gray-800" : "bg-white"
            } p-6 rounded-xl shadow border ${borderClass}`}
          >
            <h3 className="text-xl font-bold mb-4 text-blue-400">
              DevOps & Infrastructure
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                <span className={darkMode ? "" : "text-gray-700"}>
                  Docker, Kubernetes
                </span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                <span className={darkMode ? "" : "text-gray-700"}>
                  Terraform, AWS, Google Cloud
                </span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                <span className={darkMode ? "" : "text-gray-700"}>
                  GitHub Actions, CI/CD
                </span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                <span className={darkMode ? "" : "text-gray-700"}>
                  PostgreSQL, MongoDB, Redis
                </span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                <span className={darkMode ? "" : "text-gray-700"}>
                  RabbitMQ, WebSockets
                </span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check-circle text-green-500 mr-2"></i>
                <span className={darkMode ? "" : "text-gray-700"}>
                  Prometheus, Grafana
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${subtleBgClass} py-12`}>
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <a
              href="https://github.com/potolski"
              target="_blank"
              className={`mx-2 ${
                darkMode
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-500 hover:text-gray-700"
              } transition-colors`}
            >
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a
              href="https://linkedin.com/in/davidpotolskilafeta/"
              target="_blank"
              className={`mx-2 ${
                darkMode
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-500 hover:text-gray-700"
              } transition-colors`}
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a
              href="mailto:davidpotolskilafeta@gmail.com"
              className={`mx-2 ${
                darkMode
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-500 hover:text-gray-700"
              } transition-colors`}
            >
              <i className="fas fa-envelope text-2xl"></i>
            </a>
          </div>
          <p className="text-gray-500">
            © {new Date().getFullYear()} David Potolski Lafeta. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
