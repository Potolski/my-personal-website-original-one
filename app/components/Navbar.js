"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeContext } from "../contexts/ThemeContext";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/events", label: "Events" },
];

export default function Navbar() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const pathname = usePathname();

  const textBase = darkMode ? "text-gray-400" : "text-gray-500";
  const textActive = darkMode ? "text-white" : "text-gray-900";
  const textHover = darkMode ? "hover:text-white" : "hover:text-gray-900";
  const borderColor = darkMode ? "border-gray-800" : "border-gray-200";

  const wordmarkClass = darkMode ? "text-gray-100" : "text-gray-900";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-30 border-b ${borderColor}`}
      style={{
        backgroundColor: darkMode ? "rgba(23, 23, 23, 0.85)" : "rgba(255, 255, 255, 0.85)",
        backdropFilter: "saturate(180%) blur(12px)",
        WebkitBackdropFilter: "saturate(180%) blur(12px)",
      }}
    >
      <div className="container mx-auto px-4 md:px-6 h-14 flex items-center justify-between max-w-6xl">
        <Link
          href="/"
          className={`font-serif text-base md:text-lg font-semibold tracking-tight ${wordmarkClass} hover:opacity-80 transition-opacity`}
        >
          David P. Lafetá
        </Link>

        <div className="flex items-center gap-1 md:gap-2">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-2 md:px-3 py-2 text-sm font-medium transition-colors ${
                  active ? textActive : `${textBase} ${textHover}`
                }`}
                style={
                  active
                    ? {
                        textDecoration: "underline",
                        textUnderlineOffset: "8px",
                        textDecorationThickness: "2px",
                        textDecorationColor: "#f97316",
                      }
                    : undefined
                }
              >
                {link.label}
              </Link>
            );
          })}

          <button
            onClick={toggleTheme}
            aria-label="Toggle dark/light mode"
            className={`ml-1 md:ml-2 w-9 h-9 flex items-center justify-center rounded-md ${
              darkMode ? "hover:bg-gray-800 text-gray-300" : "hover:bg-gray-100 text-gray-600"
            } transition-colors`}
          >
            {darkMode ? (
              <i key="sun" className="fas fa-sun text-sm toggle-icon"></i>
            ) : (
              <i key="moon" className="fas fa-moon text-sm toggle-icon"></i>
            )}
          </button>
        </div>
      </div>

      <style jsx global>{`
        @keyframes toggle-morph {
          0% { transform: rotate(-20deg) scale(0.85); opacity: 0.85; }
          100% { transform: rotate(0deg) scale(1); opacity: 1; }
        }
        .toggle-icon {
          animation: toggle-morph 220ms ease-in-out;
        }
      `}</style>
    </nav>
  );
}
