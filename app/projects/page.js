"use client";

import React, { useContext, useState, useRef } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import Navbar from "../components/Navbar";

export default function ProjectsPage() {
  const { darkMode } = useContext(ThemeContext);

  const bgClass = darkMode ? "bg-gray-900" : "bg-white";
  const textClass = darkMode ? "text-white" : "text-gray-800";
  const cardBgClass = darkMode ? "bg-gray-900" : "bg-white";
  const borderClass = darkMode ? "border-gray-700" : "border-gray-200";
  const projectsWidthClass = "max-w-4xl";

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
    <div className={`min-h-screen ${bgClass} ${textClass} pt-14 relative`} style={darkMode ? { backgroundColor: "#171717", color: "#e5e7eb" } : undefined}>
      <Navbar />

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

