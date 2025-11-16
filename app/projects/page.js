"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ProjectsPage() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const bgClass = darkMode ? "bg-gray-900" : "bg-white";
  const textClass = darkMode ? "text-white" : "text-gray-800";
  const cardBgClass = darkMode ? "bg-gray-900" : "bg-white";
  const borderClass = darkMode ? "border-gray-700" : "border-gray-200";
  const projectsWidthClass = "max-w-5xl";
  const sideButtonClass = `w-12 h-12 rounded-lg border ${
    darkMode
      ? "border-gray-700 bg-gray-800 hover:bg-gray-700 text-gray-100 hover:shadow-md"
      : "border-gray-300 bg-white hover:bg-gray-50 text-gray-800 hover:shadow-md"
  } shadow-sm flex items-center justify-center transition-colors`;
  const sideIconBase = "w-12 h-12 flex items-center justify-center";
  const sideLabelClass = `pointer-events-none absolute left-full ml-3 text-base font-medium ${
    darkMode ? "text-gray-100" : "text-gray-900"
  } opacity-0 group-hover:opacity-100 transform transition-all group-hover:translate-x-1 hidden md:block`;
  const pathname = usePathname();

  return (
    <div className={`min-h-screen ${bgClass} ${textClass} pt-16 md:pt-0`}>
      {/* Sidebar (projects active) */}
      <nav className="fixed z-20 flex items-center gap-3 left-1/2 top-3 -translate-x-1/2 md:left-4 md:top-28 md:-translate-x-0 md:flex-col">
        <div className={`rounded-2xl p-1.5 md:p-2 ${darkMode ? "bg-gray-800/70" : "bg-gray-100"} shadow-sm flex items-center gap-2 md:flex-col md:items-center md:gap-2`}>
          <Link href="/" aria-label="Home" className={`group relative ${pathname === "/" ? "side-button " + sideButtonClass : sideIconBase}`}>
            <i className="fas fa-home side-icon"></i>
            <span className={sideLabelClass}>Home</span>
          </Link>
          <Link href="/projects" aria-label="Projects" className={`group relative ${pathname === "/projects" ? "side-button " + sideButtonClass : sideIconBase}`}>
            <i className="fas fa-th-large side-icon"></i>
            <span className={sideLabelClass}>Projects</span>
          </Link>
        </div>
        <div className="h-2"></div>
        <div className="group relative">
          <button
            onClick={toggleTheme}
            className="w-12 h-12 flex items-center justify-center"
            aria-label="Toggle dark/light mode"
          >
            {darkMode ? <i key="sun" className="fas fa-sun side-icon toggle-icon"></i> : <i key="moon" className="fas fa-moon side-icon toggle-icon"></i>}
          </button>
          <span className={sideLabelClass}>Theme</span>
        </div>
      </nav>

      {/* Global styles for icon shake/morph (shared with home) */}
      <style jsx global>{`
        @keyframes subtle-shake {
          0% { transform: translateX(0) rotate(0); }
          25% { transform: translateX(-1px) rotate(-2deg); }
          50% { transform: translateX(1px) rotate(2deg); }
          75% { transform: translateX(-0.5px) rotate(-2deg); }
          100% { transform: translateX(0) rotate(0); }
        }
        .side-button:hover .side-icon {
          animation: subtle-shake 0.25s ease-in-out;
        }
        @keyframes toggle-morph {
          0% { transform: rotate(-20deg) scale(0.85); opacity: 0.85; }
          100% { transform: rotate(0deg) scale(1); opacity: 1; }
        }
        .toggle-icon {
          animation: toggle-morph 220ms ease-in-out;
        }
      `}</style>

      <header className={`container mx-auto px-4 py-12 ${projectsWidthClass}`}>
        <h1 className="text-3xl font-serif font-semibold mb-8 text-center">Featured Projects</h1>

        <div className="grid grid-cols-1 gap-6">
          {/* Pali Wallet */}
          <div className={`${cardBgClass} rounded-lg overflow-hidden shadow-sm border ${borderClass}`}>
            <div className="p-7">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div className="flex flex-wrap items-baseline gap-3">
                  <h3 className="text-xl font-bold">Pali Wallet</h3>
                  <span className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>React • Web3.js • Blockchain</span>
                </div>
              </div>
              <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
                <p className={`${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                  A Web3 multichain wallet supporting multiple blockchains
                </p>
                <div className="flex items-center gap-4">
                  <a href="https://github.com/syscoin/pali-wallet" target="_blank" className="text-orange-600 hover:underline inline-flex items-center">
                    <i className="fab fa-github mr-1"></i> GitHub
                  </a>
                  <a href="https://paliwallet.com/" target="_blank" className="text-orange-600 hover:underline inline-flex items-center">
                    <i className="fas fa-external-link-alt mr-1"></i> Website
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Lunos */}
          <div className={`${cardBgClass} rounded-lg overflow-hidden shadow-sm border ${borderClass}`}>
            <div className="p-7">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div className="flex flex-wrap items-baseline gap-3">
                  <h3 className="text-xl font-bold">Lunos Protocol</h3>
                  <span className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>Solidity • DeFi • Insurance</span>
                </div>
              </div>
              <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
                <p className={`${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                  Automated, trustless coverage solutions for digital assets
                </p>
                <div className="flex items-center gap-4">
                  <a href="https://github.com/Uno-Re" target="_blank" className="text-orange-600 hover:underline inline-flex items-center">
                    <i className="fab fa-github mr-1"></i> GitHub
                  </a>
                  <a href="https://lunos.xyz" target="_blank" className="text-orange-600 hover:underline inline-flex items-center">
                    <i className="fas fa-external-link-alt mr-1"></i> Website
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Pegasys.fi */}
          <div className={`${cardBgClass} rounded-lg overflow-hidden shadow-sm border ${borderClass}`}>
            <div className="p-7">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div className="flex flex-wrap items-baseline gap-3">
                  <h3 className="text-xl font-bold">Pegasys.fi</h3>
                  <span className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>Solidity • DeFi • AMM</span>
                </div>
              </div>
              <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
                <p className={`${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                  DeFi Protocol forked from Uniswap v3, running on Syscoin and Rollux
                </p>
                <div className="flex items-center gap-4">
                  <a href="https://github.com/pegasys-fi" target="_blank" className="text-orange-600 hover:underline inline-flex items-center">
                    <i className="fab fa-github mr-1"></i> GitHub
                  </a>
                  <a href="https://app.pegasys.fi" target="_blank" className="text-orange-600 hover:underline inline-flex items-center">
                    <i className="fas fa-external-link-alt mr-1"></i> Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

