"use client";

import React, { useContext, useState, useEffect, useRef } from "react";
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
      ? "border-gray-600 bg-gray-700 hover:bg-gray-600 text-gray-100 hover:shadow-md"
      : "border-gray-300 bg-white hover:bg-gray-50 text-gray-800 hover:shadow-md"
  } shadow-sm flex items-center justify-center transition-colors`;
  const sideIconBase = "w-12 h-12 flex items-center justify-center";
  const sideLabelClass = `pointer-events-none absolute left-full ml-3 text-base font-medium ${
    darkMode ? "text-gray-100" : "text-gray-900"
  } opacity-0 group-hover:opacity-100 transform transition-all group-hover:translate-x-1 hidden md:block`;
  const pathname = usePathname();

  // Projects data for the accordion + image viewer
  const projects = [
    {
      key: "pali",
      title: "Pali Wallet",
      tech: "React • Web3.js • Blockchain",
      description: "A Web3 multichain wallet supporting multiple blockchains.",
      image: "/pali-preview.png",
      links: [
        { href: "https://github.com/syscoin/pali-wallet", label: "GitHub", icon: "fab fa-github" },
        { href: "https://paliwallet.com/", label: "Website", icon: "fas fa-external-link-alt" },
      ],
    },
    {
      key: "lunos",
      title: "Lunos Protocol",
      tech: "Solidity • DeFi • Insurance",
      description: "Automated, trustless coverage solutions for digital assets.",
      image: "/lunos-preview.png",
      links: [
        { href: "https://github.com/Uno-Re", label: "GitHub", icon: "fab fa-github" },
        { href: "https://lunos.xyz", label: "Website", icon: "fas fa-external-link-alt" },
      ],
    },
    {
      key: "pegasys",
      title: "Pegasys.fi",
      tech: "Solidity • DeFi • AMM",
      description: "DeFi Protocol forked from Uniswap v3, running on Syscoin and Rollux.",
      image: "/pegasys.png",
      links: [
        { href: "https://github.com/pegasys-fi", label: "GitHub", icon: "fab fa-github" },
        { href: "https://app.pegasys.fi", label: "Website", icon: "fas fa-external-link-alt" },
      ],
    },
    {
      key: "syscoin",
      title: "Syscoin",
      tech: "UTXO • NEVM • L2",
      description: "Modular blockchain combining Bitcoin security with scalable EVM smart contracts and Edgechains.",
      image: "/syscoin.png",
      links: [
        { href: "https://github.com/syscoin", label: "GitHub", icon: "fab fa-github" },
        { href: "https://syscoin.org", label: "Website", icon: "fas fa-external-link-alt" },
      ],
    },
  ];
  const [active, setActive] = useState(0);
  const listRef = useRef(null);
  const viewerRef = useRef(null);
  const [viewerHeight, setViewerHeight] = useState(null);
  const [baseHeight, setBaseHeight] = useState(null);

  useEffect(() => {
    if (!listRef.current) return;
    const update = () => {
      const target = listRef.current;
      if (!target) return;
      const listH = target.offsetHeight || 0;
      const cap = window.innerHeight * 0.85;
      const measured = Math.min(listH, cap);
      const initial = baseHeight ?? measured;
      if (baseHeight === null) setBaseHeight(initial);
      const finalH = Math.min(initial, measured);
      setViewerHeight(`${finalH}px`);
    };
    update();
    let ro;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(update);
      ro.observe(listRef.current);
    }
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("resize", update);
      if (ro) ro.disconnect();
    };
  }, [baseHeight]);

  return (
    <div className={`min-h-screen ${bgClass} ${textClass} pt-16 md:pt-0 relative`} style={darkMode ? { backgroundColor: "#171717", color: "#e5e7eb" } : undefined}>
      {/* Soft background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-10 bg-gradient-to-br from-orange-400 to-pink-500 filter blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full opacity-10 bg-gradient-to-tr from-orange-300 to-yellow-300 filter blur-3xl"></div>
      </div>
      {/* Sidebar (projects active) */}
      <nav className="fixed z-20 flex items-center gap-3 left-1/2 top-3 -translate-x-1/2 md:left-4 md:top-28 md:-translate-x-0 md:flex-col">
        <div className={`rounded-2xl p-1.5 md:p-2 ${darkMode ? "shadow-sm" : "bg-gray-100 shadow-sm"} flex items-center gap-2 md:flex-col md:items-center md:gap-2`} style={darkMode ? { backgroundColor: "#2b2b2c" } : undefined}>
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
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2 text-center">Featured Projects</h1>
        <div className="mx-auto mb-4 h-0.5 w-16 rounded" style={{ backgroundColor: "#f97316" }}></div>
        {/* Quick-links button row */}
        <div className="mx-auto max-w-xl flex flex-wrap items-center justify-center gap-3 mb-6">
          <a href="https://github.com/potolski" target="_blank" className={`inline-flex items-center px-3 py-1.5 rounded-md border text-sm ${darkMode ? "border-gray-700 text-gray-100 hover:bg-gray-800" : "border-gray-300 text-gray-800 hover:bg-gray-50"} transition-colors`}>
            <i className="fab fa-github mr-2"></i> GitHub
          </a>
          <a href="https://linkedin.com/in/davidpotolskilafeta/" target="_blank" className={`inline-flex items-center px-3 py-1.5 rounded-md border text-sm ${darkMode ? "border-gray-700 text-gray-100 hover:bg-gray-800" : "border-gray-300 text-gray-800 hover:bg-gray-50"} transition-colors`}>
            <i className="fab fa-linkedin mr-2"></i> LinkedIn
          </a>
          <a href="mailto:davidpotolskilafeta@gmail.com" className={`inline-flex items-center px-3 py-1.5 rounded-md border text-sm ${darkMode ? "border-gray-700 text-gray-100 hover:bg-gray-800" : "border-gray-300 text-gray-800 hover:bg-gray-50"} transition-colors`}>
            <i className="fas fa-envelope mr-2"></i> Email
          </a>
          <a href="https://medium.com/@davidpotolskilafeta" target="_blank" className={`inline-flex items-center px-3 py-1.5 rounded-md border text-sm ${darkMode ? "border-gray-700 text-gray-100 hover:bg-gray-800" : "border-gray-300 text-gray-800 hover:bg-gray-50"} transition-colors`}>
            <i className="fab fa-medium mr-2"></i> Blog
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Static visual on the left */}
          <div className="md:sticky md:top-24">
            <div ref={viewerRef} className={`relative w-full flex items-center justify-center`} style={{ height: viewerHeight || "12rem" }}>
              <img
                src={projects[active].image}
                alt={`${projects[active].title} preview`}
                className="max-h-full max-w-full object-contain transition-opacity duration-300"
              />
            </div>
          </div>

          {/* List/Accordion on the right */}
          <div ref={listRef}>
            <ol className="space-y-3">
              {projects.map((p, idx) => {
                const isActive = active === idx;
                return (
                  <li
                    key={p.key}
                    className={`group rounded-xl border ${borderClass} ${cardBgClass} shadow-sm transition-all duration-200 relative overflow-hidden ${isActive ? "shadow-md" : "hover:border-orange-300 hover:shadow-sm hover:bg-gray-50 dark:hover:bg-gray-900"}`}
                    style={darkMode ? { backgroundColor: "#2b2b2c" } : undefined}
                  >
                    <button
                      onClick={() => setActive(idx)}
                      className="w-full text-left px-4 py-3 md:py-4 flex items-center justify-between rounded-xl outline-none focus:outline-none focus-visible:outline-none"
                      aria-expanded={isActive}
                    >
                      {/* Left orange bar */}
                      <span
                        className="absolute left-0 top-0 h-full transition-all duration-300"
                        style={{ width: isActive ? "6px" : "3px", backgroundColor: "#f97316" }}
                      ></span>
                      <h3
                        className={`font-semibold tracking-tight text-2xl md:text-3xl transition-colors duration-300`}
                        style={isActive ? { color: "#f97316" } : undefined}
                      >
                        {p.title}
                      </h3>
                    </button>
                    <div className={`px-4 transition-[max-height,opacity,padding] ${isActive ? "duration-300" : "duration-150"} ease-in-out overflow-hidden ${isActive ? "max-h-60 md:max-h-72 opacity-100 pb-4" : "max-h-0 opacity-0 pb-0"}`}>
                      <div className="h-px w-full mb-3 bg-gray-200 dark:bg-gray-800"></div>
                      <div className={`text-sm mb-2 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{p.tech}</div>
                      <div className={`${darkMode ? "text-gray-300" : "text-gray-700"} mb-3`}>{p.description}</div>
                      <div className="flex items-center gap-4">
                        {p.links.map((l) => (
                          <a key={l.href} href={l.href} target="_blank" className="text-orange-600 hover:underline inline-flex items-center">
                            <i className={`${l.icon} mr-1`}></i> {l.label}
                          </a>
                        ))}
                      </div>
                    </div>
                    {/* Divider between items */}
                    {idx !== projects.length - 1 && (
                      <div className="absolute -bottom-2 left-3 right-3 h-px bg-gray-200 dark:bg-gray-800 opacity-60 md:hidden"></div>
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </header>
    </div>
  );
}

