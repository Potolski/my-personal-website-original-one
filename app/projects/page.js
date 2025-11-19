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
  const projectsWidthClass = "max-w-4xl";
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
  const carouselRef = useRef(null);
  const onCarouselScroll = () => {
    const el = carouselRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / el.clientWidth);
    if (index !== active) setActive(index);
  };

  return (
    <div className={`min-h-screen ${bgClass} ${textClass} pt-0 md:pt-0 relative`} style={darkMode ? { backgroundColor: "#171717", color: "#e5e7eb" } : undefined}>
      {/* Soft background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-10 bg-gradient-to-br from-orange-400 to-pink-500 filter blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full opacity-10 bg-gradient-to-tr from-orange-300 to-yellow-300 filter blur-3xl"></div>
      </div>
      {/* Sidebar (projects active) */}
      <nav
        className="fixed z-20 left-0 right-0 bottom-0 md:left-4 md:right-auto md:top-28 md:bottom-auto"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div
          className={`w-full px-4 py-2 border-t flex items-center justify-around md:w-auto md:px-2 md:py-2 md:border-none md:rounded-2xl md:flex-col md:items-center md:gap-2 ${darkMode ? "" : "bg-gray-100 shadow-sm"}`}
          style={darkMode ? { backgroundColor: "#2b2b2c", borderTopColor: "#3b3b3c" } : undefined}
        >
          <Link href="/" aria-label="Home" className={`group relative ${pathname === "/" ? "side-button " + sideButtonClass : sideIconBase}`}>
            <i className="fas fa-home side-icon"></i>
            <span className={sideLabelClass}>Home</span>
          </Link>
          <Link href="/projects" aria-label="Projects" className={`group relative ${pathname === "/projects" ? "side-button " + sideButtonClass : sideIconBase}`}>
            <i className="fas fa-th-large side-icon"></i>
            <span className={sideLabelClass}>Projects</span>
          </Link>
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

      <header className={`container mx-auto px-0 md:px-4 py-6 md:py-12 ${projectsWidthClass}`}>
        <h1 className="text-2xl md:text-4xl font-semibold tracking-tight mb-2 text-center">Featured Projects</h1>
        <div className="mx-auto mb-4 md:mb-8 h-0.5 w-16 rounded" style={{ backgroundColor: "#f97316" }}></div>
        
        {/* Mobile: Carousel */}
        <div className="md:hidden">
          <div
            ref={carouselRef}
            onScroll={onCarouselScroll}
            className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth"
          >
            {projects.map((p, idx) => (
              <section key={p.key} className="min-w-full snap-start px-3">
                <div className="flex flex-col items-stretch gap-3">
                  <div className="w-full flex items-center justify-center">
                    <img
                      src={p.image}
                      alt={`${p.title} preview`}
                      className="w-full object-contain max-h-[20vh]"
                    />
                  </div>
                  <div
                    className={`w-full rounded-xl border ${borderClass} ${cardBgClass} p-3 shadow-sm`}
                    style={darkMode ? { backgroundColor: "#2b2b2c" } : undefined}
                  >
                    <h3 className="text-lg font-semibold mb-1" style={{ color: idx === active ? "#f97316" : undefined }}>
                      {p.title}
                    </h3>
                    <div className="h-px w-full mb-2 bg-gray-200 dark:bg-gray-800"></div>
                    <div className={`text-xs mb-1.5 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{p.tech}</div>
                    <div className={`${darkMode ? "text-gray-300" : "text-gray-700"} mb-2 text-xs`}>{p.description}</div>
                    <div className="flex items-center gap-3">
                      {p.links.map((l) => (
                        <a key={l.href} href={l.href} target="_blank" className="text-orange-600 hover:underline inline-flex items-center text-xs">
                          <i className={`${l.icon} mr-1`}></i> {l.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
          {/* Carousel indicators */}
          <div className="flex items-center justify-center gap-2 mt-3">
            {projects.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === active ? "bg-orange-500" : "bg-gray-300 dark:bg-gray-700"
                }`}
              ></span>
            ))}
            <span className="text-xs ml-1 text-gray-500 dark:text-gray-400">
              {active + 1}/{projects.length}
            </span>
          </div>
        </div>

        {/* Desktop: Static image + Accordion */}
        <div className="hidden md:flex md:gap-8 md:items-start">
          {/* Static image viewer */}
          <div className="flex-shrink-0 w-1/2">
            <img
              src={projects[active].image}
              alt={`${projects[active].title} preview`}
              className="w-full object-contain max-h-[28rem] transition-opacity duration-300"
            />
          </div>

          {/* Accordion cards */}
          <div className="flex-1 space-y-3">
            {projects.map((p, idx) => (
              <div
                key={p.key}
                className={`rounded-xl border ${borderClass} ${cardBgClass} shadow-sm overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-md`}
                style={darkMode ? { backgroundColor: "#2b2b2c" } : undefined}
                onClick={() => setActive(idx)}
              >
                <div className={`p-4 ${idx === active ? "" : ""}`}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold" style={{ color: idx === active ? "#f97316" : undefined }}>
                      {p.title}
                    </h3>
                    <i className={`fas fa-chevron-${idx === active ? "up" : "down"} text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}></i>
                  </div>
                  
                  {idx === active && (
                    <div className="mt-3 pt-3 border-t" style={{ borderColor: darkMode ? "#3b3b3c" : "#e5e7eb" }}>
                      <div className={`text-sm mb-2 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{p.tech}</div>
                      <div className={`${darkMode ? "text-gray-300" : "text-gray-700"} mb-3 text-base`}>{p.description}</div>
                      <div className="flex items-center gap-4">
                        {p.links.map((l) => (
                          <a 
                            key={l.href} 
                            href={l.href} 
                            target="_blank" 
                            className="text-orange-600 hover:underline inline-flex items-center text-sm"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <i className={`${l.icon} mr-1.5`}></i> {l.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}

